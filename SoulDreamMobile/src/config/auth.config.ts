export const googleAuthConfig = {
  expoClientId: 'YOUR_GOOGLE_CLIENT_ID_WEB', // A menudo el mismo que el de Android o uno específico para Expo Go
  iosClientId: 'YOUR_GOOGLE_CLIENT_ID_IOS',
  androidClientId: 'YOUR_GOOGLE_CLIENT_ID_ANDROID',
  webClientId: 'YOUR_GOOGLE_CLIENT_ID_WEB',
  scopes: ['profile', 'email'],
  redirectUri: 'exp://YOUR_PROJECT_EXPERIENCE_ID.auth.expo.io/@YOUR_EXPO_USERNAME/YOUR_PROJECT_SLUG', // Este es un ejemplo, se debe ajustar
  // También puedes usar AuthSession.makeRedirectUri() para generar esto dinámicamente.
};

// Es importante que el redirectUri esté configurado correctamente en tu Google Cloud Console
// para cada una de las plataformas (iOS, Android, Web).

// Para desarrollo con Expo Go, el redirectUri suele ser algo como:
// import * as AuthSession from 'expo-auth-session';
// const redirectUri = AuthSession.makeRedirectUri({
//   useProxy: true,
// });
// console.log('Redirect URI for Expo Go:', redirectUri);
// Luego, añade este URI a las URIs de redirección autorizadas en Google Cloud Console. 