import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme';
import { StyledText } from './src/components/common/StyledText';

function AppContent() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={theme.colors.background === '#FFFFFF' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.background}
      />
      <StyledText variant="h1" style={styles.title}>
        ¡Hola, SoulDream Mobile!
      </StyledText>
      <StyledText variant="body" style={styles.subtitle}>
        Fase de Configuración Lista.
      </StyledText>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 'auto',
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 'auto',
  },
});
