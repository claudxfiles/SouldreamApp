import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { googleAuthConfig } from '../config/auth.config';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';

// Comentado por ahora, llamar si es necesario para Expo Router en un layout global.
// WebBrowser.maybeCompleteAuthSession();

const AUTH_TOKEN_KEY = 'souldream_auth_token';
const USER_INFO_KEY = 'souldream_user_info';

interface UserInfo {
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  // Agrega otros campos relevantes que tu backend devuelva sobre el usuario
  // Ejemplo: profilePictureUrl?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticating: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

// TODO: Reemplaza esta URL con la URL real de tu endpoint de backend para autenticación móvil con Google
// Ejemplo: 'http://192.168.1.100:8000/api/v1/auth/google-mobile' o 'https://tuapi.souldream.com/api/v1/auth/google-mobile'
const BACKEND_GOOGLE_AUTH_URL = 
  process.env.EXPO_PUBLIC_API_URL 
    ? `${process.env.EXPO_PUBLIC_API_URL}/auth/google-mobile` 
    : 'http://localhost:8000/api/v1/auth/google-mobile'; // Placeholder, asegúrate que sea accesible desde el móvil

export const useAuth = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Carga inicial de token/usuario
  const [isAuthenticating, setIsAuthenticating] = useState(false); // Proceso de login activo

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    // Opcional: puedes solicitar scopes adicionales si los necesitas
    // scopes: ['profile', 'email'], 
    selectAccount: true, 
  });

  useEffect(() => {
    const loadStoredData = async () => {
      setIsLoading(true);
      try {
        const storedToken = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
        const storedUserInfo = await SecureStore.getItemAsync(USER_INFO_KEY);

        if (storedToken && storedUserInfo) {
          // TODO: Valida el token con tu backend aquí en producción.
          setUser(JSON.parse(storedUserInfo));
          console.log('Auth: Usuario y token cargados desde SecureStore.');
        } else {
          console.log('Auth: No se encontró usuario o token en SecureStore.');
        }
      } catch (error) {
        console.error('Auth: Error cargando datos desde SecureStore:', error);
        await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY).catch(e => console.error('Auth: Error borrando token corrupto', e));
        await SecureStore.deleteItemAsync(USER_INFO_KEY).catch(e => console.error('Auth: Error borrando info de usuario corrupta', e));
      } finally {
        setIsLoading(false);
      }
    };
    loadStoredData();
  }, []);

  useEffect(() => {
    const handleGoogleResponse = async () => {
      if (response?.type === 'success' && response.authentication?.idToken) {
        if (isAuthenticating) return; // Prevenir procesamiento múltiple si ya está en curso
        setIsAuthenticating(true);
        const { idToken } = response.authentication;
        console.log('Auth: Google idToken obtenido en frontend:', idToken.substring(0, 60) + '...');

        try {
          console.log(`Auth: Enviando idToken a backend: ${BACKEND_GOOGLE_AUTH_URL}`);
          const backendResponse = await fetch(BACKEND_GOOGLE_AUTH_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: idToken }),
          });

          const responseBodyText = await backendResponse.text();
          console.log('Auth: Respuesta del backend (texto):', responseBodyText);

          if (!backendResponse.ok) {
            throw new Error(
              `Error del backend: ${backendResponse.status} - ${responseBodyText}`
            );
          }
          
          const backendData = JSON.parse(responseBodyText);

          if (backendData.token && backendData.user) {
            await SecureStore.setItemAsync(AUTH_TOKEN_KEY, backendData.token);
            await SecureStore.setItemAsync(USER_INFO_KEY, JSON.stringify(backendData.user));
            setUser(backendData.user);
            console.log('Auth: Usuario autenticado por backend y datos guardados:', backendData.user);
          } else {
            throw new Error('Auth: Respuesta inesperada del backend: falta token o usuario.');
          }
        } catch (error) {
          console.error('Auth: Error en el intercambio de token con el backend:', error);
        } finally {
          setIsAuthenticating(false);
        }
      } else if (response?.type === 'error') {
        console.error('Auth: Error de autenticación con Google:', response.error);
        setIsAuthenticating(false); // Asegurar que se resetea
      } else if (response?.type === 'cancel') {
        console.log('Auth: Autenticación con Google cancelada por el usuario.');
        setIsAuthenticating(false); // Asegurar que se resetea
      } else if (response?.type === 'dismiss') {
        console.log('Auth: Autenticación con Google descartada (dismissed).');
        setIsAuthenticating(false); // Asegurar que se resetea
      }
    };

    if (request && response) {
      handleGoogleResponse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [response]); // Solo queremos reaccionar a cambios en 'response'. 'request' es estable.

  const signIn = async () => {
    if (isAuthenticating || isLoading) return;
    console.log('Auth: Iniciando signIn...');
    setIsAuthenticating(true); 
    try {
      const promptResult = await promptAsync(); 
      if (promptResult?.type !== 'success') {
        // Si no es success (puede ser cancel, dismiss, o error manejado por el useEffect de response)
        // Lo ponemos en false aquí para permitir reintentos si no hubo error de red grave.
        setIsAuthenticating(false);
        console.log(`Auth: promptAsync no resultó en success, tipo: ${promptResult?.type}`);
      }
      // El useEffect [response] manejará 'success' o errores de la respuesta.
    } catch (error: any) {
      console.error('Auth: Error al invocar promptAsync:', error.message);
      setIsAuthenticating(false);
    }
  };

  const signOut = async () => {
    console.log('Auth: Iniciando signOut...');
    setIsLoading(true);
    try {
      // Opcional: Revocar el token de Google si es necesario y si tienes el accessToken
      // const googleAccessToken = (response as any)?.authentication?.accessToken;
      // if (googleAccessToken) {
      //   await Google.revokeAsync({ token: googleAccessToken, clientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID! }, { revocationEndpoint: Google.discovery?.revocationEndpoint! });
      //   console.log('Auth: Token de Google revocado.');
      // }

      await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
      await SecureStore.deleteItemAsync(USER_INFO_KEY);
      setUser(null);
      console.log('Auth: Usuario deslogueado y datos borrados de SecureStore.');
      // Opcional: Informar al backend sobre el logout
    } catch (error) {
      console.error('Auth: Error durante el signOut:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { user, isLoading, isAuthenticating, signIn, signOut };
}; 