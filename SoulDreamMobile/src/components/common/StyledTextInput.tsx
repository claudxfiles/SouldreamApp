import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useTheme, Theme } from '../../contexts/ThemeContext';

interface StyledTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>; // Para el estilo del TextInput en sí
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  // Podríamos añadir más props como touched, etc. si usamos Formik/React Hook Form
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  leftIcon,
  rightIcon,
  ...restOfProps
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme, !!error);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, error ? styles.inputContainerError : {}]}>
        {leftIcon && <View style={styles.iconWrapper}>{leftIcon}</View>}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={theme.colors.textSecondary} // Color de placeholder del tema
          {...restOfProps}
        />
        {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
      </View>
      {error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
    </View>
  );
};

const makeStyles = (theme: Theme, hasError: boolean) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.medium,
    },
    label: {
      fontSize: theme.typography.fontSizes.medium,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.extraSmall,
      fontFamily: theme.typography.fontFamilyRegular,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface, // O background, según diseño
      borderColor: hasError ? theme.colors.error : theme.colors.border,
      borderWidth: 1,
      borderRadius: theme.shapes.borderRadiusMedium,
      paddingHorizontal: theme.spacing.small,
    },
    inputContainerError: {
      borderColor: theme.colors.error,
    },
    input: {
      flex: 1,
      height: 44, // Altura similar a la de los botones para consistencia
      fontSize: theme.typography.fontSizes.medium,
      color: theme.colors.textPrimary,
      fontFamily: theme.typography.fontFamilyRegular,
      paddingVertical: theme.spacing.small, // Añadido para mejor padding interno
    },
    errorText: {
      fontSize: theme.typography.fontSizes.small,
      color: theme.colors.error,
      marginTop: theme.spacing.extraSmall,
      fontFamily: theme.typography.fontFamilyRegular,
    },
    iconWrapper: {
      paddingHorizontal: theme.spacing.extraSmall,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default StyledTextInput; 