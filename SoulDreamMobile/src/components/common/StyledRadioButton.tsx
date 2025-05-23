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
import Icon, { IconFamily } from './Icon';

interface StyledRadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label?: string;
  labelPosition?: 'left' | 'right';
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  radioStyle?: StyleProp<ViewStyle>; // Estilo para el contenedor del icono del radio
  labelStyle?: StyleProp<TextStyle>;
  size?: number; // Tamaño del radio button
  selectedIconName?: string;
  unselectedIconName?: string;
  iconFamily?: IconFamily;
}

const StyledRadioButton: React.FC<StyledRadioButtonProps> = ({
  selected,
  onPress,
  label,
  labelPosition = 'right',
  disabled = false,
  containerStyle,
  radioStyle, // Este estilo se aplicará al TouchableOpacity que envuelve el Icon
  labelStyle,
  size = 24, // Tamaño por defecto del radio button
  selectedIconName = 'radiobox-marked', // Icono de MaterialCommunityIcons
  unselectedIconName = 'radiobox-blank', // Icono de MaterialCommunityIcons
  iconFamily = 'MaterialCommunityIcons',
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme, size);

  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  const iconColor = disabled
    ? theme.colors.textDisabled
    : selected
    ? theme.colors.primary
    : theme.colors.textSecondary;

  // El TouchableOpacity aquí es el área táctil principal del radio button visual
  const radioButtonComponent = (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[styles.radioTouchable, radioStyle]} // Aplicamos radioStyle aquí
      activeOpacity={theme.effects.activeOpacity}
    >
      <Icon
        family={iconFamily}
        name={selected ? selectedIconName : unselectedIconName}
        size={size} // El icono toma el tamaño completo del radio
        color={iconColor}
      />
    </TouchableOpacity>
  );

  if (!label) {
    return radioButtonComponent;
  }

  // Si hay etiqueta, envolvemos todo en un TouchableOpacity para que la etiqueta también sea táctil
  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled} activeOpacity={1}>
      <View style={[styles.container, containerStyle]}>
        {labelPosition === 'left' && (
          <Text style={[styles.label, disabled && styles.labelDisabled, labelStyle]}>{label}</Text>
        )}
        {radioButtonComponent}
        {labelPosition === 'right' && (
          <Text style={[styles.label, disabled && styles.labelDisabled, labelStyle]}>{label}</Text>
        )}
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
    radioTouchable: {
      width: size, // El área táctil tiene el tamaño especificado
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      // No se necesitan bordes aquí si el icono ya es un círculo completo (ej. radiobox-blank)
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

export default StyledRadioButton; 