import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getAppTheme } from '../src/styles/theme'; // Importar nuestro sistema de tema

export default function IndexScreen() {
  const theme = getAppTheme(); // Obtener el tema actual

  // Definir estilos usando el tema
  // Hacemos esto dentro del componente para que se recalcule si el tema cambia (aunque getAppTheme no es reactivo por sí solo)
  // Para reactividad completa, necesitaríamos un ThemeContext.
  const themedStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.xxl, // Usar espaciado del tema
      backgroundColor: theme.colors.background, // Usar color de fondo del tema
    },
    title: {
      ...theme.textVariants.heading1, // Usar variante de texto del tema
      color: theme.colors.primary, // Usar color primario del tema
      marginBottom: theme.spacing.md, // Usar espaciado del tema
      textAlign: 'center',
    },
    subtitle: {
      ...theme.textVariants.body, // Usar variante de texto del tema
      color: theme.colors.foreground, // Usar color de texto del tema
      textAlign: 'center',
    },
  });

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.title}>Bienvenido a SoulDream Mobile</Text>
      <Text style={themedStyles.subtitle}>Esta es la pantalla de inicio (index.tsx).</Text>
    </View>
  );
}

// Los estilos originales se eliminan o se refactorizan dentro de themedStyles
