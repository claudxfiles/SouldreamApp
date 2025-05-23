import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { googleAuthConfig } from '../config/auth.config';
import { Platform } from 'react-native';

const SECURE_STORE_TOKEN_KEY = 'sessionToken';
const SECURE_STORE_USER_KEY = 'sessionUser';

if (Platform.OS === 'web') {
  WebBrowser.maybeCompleteAuthSession();
}

interface UserInfo {
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
}

export const useAuth = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const [appToken, setAppToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticating, setIsAuthenticating] = React.useState(false);

  const redirectUri = AuthSession.makeRedirectUri({
    preferLocalhost: Platform.OS === 'web',
    useProxy: Platform.OS !== 'web',
  } as AuthSession.AuthSessionRedirectUriOptions);
  console.log("Generated Redirect URI:", redirectUri);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: googleAuthConfig.expoClientId,
    iosClientId: googleAuthConfig.iosClientId,
    androidClientId: googleAuthConfig.androidClientId,
    webClientId: googleAuthConfig.webClientId,
    scopes: googleAuthConfig.scopes,
    redirectUri: redirectUri,
  });

  React.useEffect(() => {
    const loadSession = async () => {
      setIsLoading(true);
      try {
        const storedToken = await SecureStore.getItemAsync(SECURE_STORE_TOKEN_KEY);
        const storedUser = await SecureStore.getItemAsync(SECURE_STORE_USER_KEY);

        if (storedToken && storedUser) {
          setAppToken(storedToken);
          setUserInfo(JSON.parse(storedUser));
          console.log('Session loaded from secure store.');
        }
      } catch (e) {
        console.error('Failed to load session from secure store', e);
        await SecureStore.deleteItemAsync(SECURE_STORE_TOKEN_KEY);
        await SecureStore.deleteItemAsync(SECURE_STORE_USER_KEY);
      }
      setIsLoading(false);
    };
    loadSession();
  }, []);

  React.useEffect(() => {
    const handleResponse = async () => {
      if (response?.type === 'success') {
        const { authentication } = response;
        setIsAuthenticating(true);
        
        if (authentication?.accessToken) {
          try {
            console.log('Google Access Token:', authentication.accessToken);
            console.log('Google ID Token:', authentication.idToken);

            const MOCK_BACKEND_RESPONSE = {
              appToken: `fake-backend-token-for-${authentication.idToken?.substring(0, 10)}`,
              user: {
                id: 'mock-user-id',
                email: (await (await fetch('https://www.googleapis.com/userinfo/v2/me', { headers: { Authorization: `Bearer ${authentication.accessToken}` } })).json()).email,
                name: (await (await fetch('https://www.googleapis.com/userinfo/v2/me', { headers: { Authorization: `Bearer ${authentication.accessToken}` } })).json()).name,
                picture: (await (await fetch('https://www.googleapis.com/userinfo/v2/me', { headers: { Authorization: `Bearer ${authentication.accessToken}` } })).json()).picture,
              }
            };
            
            const receivedAppToken = MOCK_BACKEND_RESPONSE.appToken;
            const receivedUserInfo = MOCK_BACKEND_RESPONSE.user;

            await SecureStore.setItemAsync(SECURE_STORE_TOKEN_KEY, receivedAppToken);
            await SecureStore.setItemAsync(SECURE_STORE_USER_KEY, JSON.stringify(receivedUserInfo));
            
            setAppToken(receivedAppToken);
            setUserInfo(receivedUserInfo);
            console.log('User authenticated and session stored.', receivedUserInfo);

          } catch (error) {
            console.error("Error during backend token exchange or fetching user info:", error);
            await SecureStore.deleteItemAsync(SECURE_STORE_TOKEN_KEY);
            await SecureStore.deleteItemAsync(SECURE_STORE_USER_KEY);
            setAppToken(null);
            setUserInfo(null);
          } finally {
            setIsAuthenticating(false);
          }
        } else {
          console.log('Google authentication response did not include an access token.');
          setIsAuthenticating(false);
        }
      } else if (response?.type === 'error') {
        console.error('Google Authentication Error:', response.error);
        setIsAuthenticating(false);
      } else if (response?.type === 'cancel') {
        console.log('User cancelled Google authentication');
        setIsAuthenticating(false);
      } else if (response?.type === 'dismiss') {
        console.log('Google authentication dismissed by user or system');
        setIsAuthenticating(false);
      }
    };

    if (response) {
      handleResponse();
    }
  }, [response]);

  const signInWithGoogle = async () => {
    if (isAuthenticating || isLoading) return;
    setIsAuthenticating(true);
    try {
      console.log('Attempting to sign in with Google via promptAsync...');
      await promptAsync();
    } catch (error) {
      console.error("Error calling promptAsync for Google sign-in:", error);
      setIsAuthenticating(false);
    }
  };

  const signOut = async (updateLoadingState = true) => {
    if (updateLoadingState) setIsAuthenticating(true);
    try {
      let googleAccessTokenToRevoke: string | undefined = undefined;
      if (response?.type === 'success' && response.authentication?.accessToken) {
        googleAccessTokenToRevoke = response.authentication.accessToken;
      }

      if (googleAccessTokenToRevoke) {
        try {
          await AuthSession.revokeAsync(
            { token: googleAccessTokenToRevoke, clientId: googleAuthConfig.expoClientId },
            { revocationEndpoint: 'https://oauth2.googleapis.com/revoke' }
          );
          console.log('Google access token revoked.');
        } catch (e) {
          console.error("Error revoking Google access token", e);
        }
      }

      console.log('TODO: Call backend to invalidate session token:', appToken);

      await SecureStore.deleteItemAsync(SECURE_STORE_TOKEN_KEY);
      await SecureStore.deleteItemAsync(SECURE_STORE_USER_KEY);
      setAppToken(null);
      setUserInfo(null);
      console.log('User signed out, local session cleared.');
    } catch (error) {
      console.error('Error during sign out:', error);
    } finally {
      if (updateLoadingState) setIsAuthenticating(false);
    }
  };

  return {
    user: userInfo,
    appToken,
    isLoading,
    isAuthenticating,
    signInWithGoogle,
    signOut,
    isLoggedIn: !!appToken && !!userInfo,
    redirectUriForConfig: redirectUri,
  };
}; 