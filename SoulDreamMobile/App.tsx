import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import theme from './src/styles/theme'; // Importando nuestro tema

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.Colors.background} />
        <View style={styles.container}>
          <Text style={styles.text}>¡Hola, SoulDream Mobile!</Text>
          <Text style={styles.textSub}>Fase de Configuración Lista.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.Spacing.md,
  },
  text: {
    fontSize: theme.Fonts.size.xl,
    fontWeight: theme.Fonts.weight.bold,
    color: theme.Colors.primary,
    textAlign: 'center',
  },
  textSub: {
    fontSize: theme.Fonts.size.md,
    color: theme.Colors.textLight,
    marginTop: theme.Spacing.sm,
    textAlign: 'center',
  },
});
