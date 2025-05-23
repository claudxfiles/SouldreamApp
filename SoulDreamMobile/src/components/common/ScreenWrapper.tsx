import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, Theme } from '../../contexts/ThemeContext';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  withScrollView?: boolean;
  // Podríamos añadir props para controlar el comportamiento de KeyboardAvoidingView si es necesario
  // o para controlar los edges de SafeAreaView (ej. edges={['bottom', 'left', 'right']})
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  withScrollView = true, // Por defecto, usar ScrollView para contenido que pueda exceder la pantalla
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const content = withScrollView ? (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    children
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Ajustar si es necesario
      >
        <View style={[styles.container, style]}>
          {content}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing.medium, // Padding horizontal por defecto
      paddingVertical: theme.spacing.medium,   // Padding vertical por defecto
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1, // Asegura que el contenido pueda crecer y el scroll funcione
    },
  });

export default ScreenWrapper; 