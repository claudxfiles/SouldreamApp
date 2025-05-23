import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Theme, useTheme} from '../../contexts/ThemeContext'; // Ajusta la ruta según tu estructura

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  title?: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
  children?: React.ReactNode; // Para permitir contenido personalizado además del título
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  fullWidth = false,
  children,
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const getVariantStyles = () => {
    const base = {
      button: {},
      text: {},
    };
    switch (variant) {
      case 'primary':
        base.button = styles.primaryButton;
        base.text = styles.primaryButtonText;
        break;
      case 'secondary':
        base.button = styles.secondaryButton;
        base.text = styles.secondaryButtonText;
        break;
      case 'outline':
        base.button = styles.outlineButton;
        base.text = styles.outlineButtonText;
        break;
      case 'ghost':
        base.button = styles.ghostButton;
        base.text = styles.ghostButtonText;
        break;
      case 'link':
        base.button = styles.linkButton;
        base.text = styles.linkButtonText;
        break;
      default:
        base.button = styles.primaryButton;
        base.text = styles.primaryButtonText;
    }
    return base;
  };

  const getSizeStyles = () => {
    const base = {
      button: {},
      text: {},
      iconSize: 20,
    };
    switch (size) {
      case 'small':
        base.button = styles.smallButton;
        base.text = styles.smallButtonText;
        base.iconSize = 16;
        break;
      case 'medium':
        base.button = styles.mediumButton;
        base.text = styles.mediumButtonText;
        base.iconSize = 20;
        break;
      case 'large':
        base.button = styles.largeButton;
        base.text = styles.largeButtonText;
        base.iconSize = 24;
        break;
      default:
        base.button = styles.mediumButton;
        base.text = styles.mediumButtonText;
    }
    return base;
  };

  const variantStyle = getVariantStyles();
  const sizeStyle = getSizeStyles();

  const buttonStyles = [
    styles.buttonBase,
    variantStyle.button,
    sizeStyle.button,
    fullWidth && styles.fullWidth,
    disabled && styles.disabledButton,
    isLoading && styles.loadingButton,
    style,
  ];

  const textStyles = [
    styles.textBase,
    variantStyle.text,
    sizeStyle.text,
    disabled && styles.disabledText,
    textStyle,
  ];

  // Si 'children' se proporciona, se renderiza en lugar de 'title', 'leftIcon', y 'rightIcon'
  const content = children ? (
    children
  ) : (
    <>
      {isLoading ? (
        <ActivityIndicator
          size={size === 'small' ? 'small' : 'large'}
          color={(variantStyle.text as TextStyle)?.color || theme.colors.textPrimary}
        />
      ) : (
        <>
          {leftIcon && <View style={styles.iconWrapper}>{leftIcon}</View>}
          {title && <Text style={textStyles}>{title}</Text>}
          {rightIcon && <View style={[styles.iconWrapper, styles.iconRight]}>{rightIcon}</View>}
        </>
      )}
    </>
  );


  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={theme.effects.activeOpacity}
    >
      {content}
    </TouchableOpacity>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    buttonBase: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.shapes.borderRadiusMedium,
      borderWidth: 1,
      borderColor: 'transparent',
      paddingHorizontal: theme.spacing.medium,
      minHeight: 44, // Altura mínima para accesibilidad táctil
    },
    textBase: {
      fontFamily: theme.typography.fontFamilyRegular,
      fontWeight: theme.typography.weights.medium as any, // RN no siempre tiene todos los pesos, ajustar
      textAlign: 'center',
    },
    // Variants
    primaryButton: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    primaryButtonText: {
      color: theme.colors.textOnPrimary,
    },
    secondaryButton: {
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.secondary,
    },
    secondaryButtonText: {
      color: theme.colors.textOnSecondary,
    },
    outlineButton: {
      backgroundColor: 'transparent',
      borderColor: theme.colors.primary,
    },
    outlineButtonText: {
      color: theme.colors.primary,
    },
    ghostButton: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    ghostButtonText: {
      color: theme.colors.textPrimary,
    },
    linkButton: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      paddingHorizontal: theme.spacing.extraSmall,
      minHeight: undefined, // Permitir que el tamaño sea más pequeño
    },
    linkButtonText: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
    // Sizes
    smallButton: {
      paddingVertical: theme.spacing.extraSmall,
      paddingHorizontal: theme.spacing.small,
      minHeight: 32,
    },
    smallButtonText: {
      fontSize: theme.typography.fontSizes.small,
    },
    mediumButton: {
      paddingVertical: theme.spacing.small, // Valor base
    },
    mediumButtonText: {
      fontSize: theme.typography.fontSizes.medium, // Valor base
    },
    largeButton: {
      paddingVertical: theme.spacing.medium,
      paddingHorizontal: theme.spacing.large,
      minHeight: 50,
    },
    largeButtonText: {
      fontSize: theme.typography.fontSizes.large,
    },
    // States
    disabledButton: {
      opacity: theme.effects.disabledOpacity,
      backgroundColor: theme.colors.backgroundDisabled, // Un color de fondo deshabilitado genérico
      borderColor: theme.colors.borderDisabled,
    },
    disabledText: {
      color: theme.colors.textDisabled,
    },
    loadingButton: {
      opacity: 0.8, // Podríamos ajustar esto o usar un overlay
    },
    // Layout
    fullWidth: {
      width: '100%',
    },
    iconWrapper: {
      marginRight: theme.spacing.small,
    },
    iconRight: {
      marginRight: 0,
      marginLeft: theme.spacing.small,
    }
  });

export default Button; 