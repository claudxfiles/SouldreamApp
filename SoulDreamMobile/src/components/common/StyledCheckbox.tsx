import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme, Theme } from '../../contexts/ThemeContext';
import Icon, { IconFamily } from './Icon'; // Usaremos nuestro componente Icon

interface StyledCheckboxProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  label?: string;
  labelPosition?: 'left' | 'right';
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  checkboxStyle?: StyleProp<ViewStyle>; // Estilo para el contenedor del icono del checkbox
  labelStyle?: StyleProp<TextStyle>;
  size?: number; // Tamaño del checkbox
  checkedIconName?: string;
  uncheckedIconName?: string;
  iconFamily?: IconFamily;
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({
  value,
  onValueChange,
  label,
  labelPosition = 'right',
  disabled = false,
  containerStyle,
  checkboxStyle,
  labelStyle,
  size = 24, // Tamaño por defecto del checkbox
  checkedIconName = 'checkbox-marked', // Icono de MaterialCommunityIcons
  uncheckedIconName = 'checkbox-blank-outline', // Icono de MaterialCommunityIcons
  iconFamily = 'MaterialCommunityIcons',
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme, size);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  const iconColor = disabled
    ? theme.colors.textDisabled
    : value
    ? theme.colors.primary
    : theme.colors.textSecondary;

  const checkboxComponent = (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.checkboxBase,
        value && styles.checkboxChecked,
        disabled && styles.checkboxDisabled,
        checkboxStyle,
      ]}
      activeOpacity={theme.effects.activeOpacity}
    >
      <Icon
        family={iconFamily}
        name={value ? checkedIconName : uncheckedIconName}
        size={size * 0.8} // El icono un poco más pequeño que el contenedor
        color={iconColor}
      />
    </TouchableOpacity>
  );

  if (!label) {
    return checkboxComponent;
  }

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled} activeOpacity={1}> 
      <View style={[styles.container, containerStyle]}>
        {labelPosition === 'left' && <Text style={[styles.label, disabled && styles.labelDisabled, labelStyle]}>{label}</Text>}
        {checkboxComponent}
        {labelPosition === 'right' && <Text style={[styles.label, disabled && styles.labelDisabled, labelStyle]}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const makeStyles = (theme: Theme, size: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.medium,
    },
    checkboxBase: {
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.shapes.borderRadiusSmall,
      backgroundColor: theme.colors.surface, // Fondo del checkbox
    },
    checkboxChecked: {
      borderColor: theme.colors.primary,
      // backgroundColor: theme.colors.primary, // Opcional: llenar el fondo cuando está marcado
    },
    checkboxDisabled: {
      borderColor: theme.colors.borderDisabled,
      backgroundColor: theme.colors.backgroundDisabled,
    },
    label: {
      fontSize: theme.typography.fontSizes.medium,
      color: theme.colors.textPrimary,
      fontFamily: theme.typography.fontFamilyRegular,
      marginHorizontal: theme.spacing.small,
    },
    labelDisabled: {
      color: theme.colors.textDisabled,
    },
  });

export default StyledCheckbox; 