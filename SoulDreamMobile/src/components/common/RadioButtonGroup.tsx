import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';
import StyledRadioButton from './StyledRadioButton';
import { useTheme, Theme } from '../../contexts/ThemeContext';
import { IconFamily } from './Icon'; // Para las props de los iconos de StyledRadioButton

export interface RadioButtonOption<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean;
}

interface RadioButtonGroupProps<T = string | number> {
  options: RadioButtonOption<T>[];
  selectedValue: T | null | undefined;
  onValueChange: (value: T) => void;
  layout?: 'vertical' | 'horizontal';
  containerStyle?: StyleProp<ViewStyle>;
  radioContainerStyle?: StyleProp<ViewStyle>; // Estilo para el contenedor de cada radio + label
  label?: string; // Etiqueta opcional para todo el grupo
  labelStyle?: StyleProp<ViewStyle>;
  disabled?: boolean; // Para deshabilitar todo el grupo

  // Props para pasar a cada StyledRadioButton individualmente
  radioSize?: number;
  radioLabelPosition?: 'left' | 'right';
  selectedIconName?: string;
  unselectedIconName?: string;
  iconFamily?: IconFamily;
}

const RadioButtonGroup = <T extends string | number> ({
  options,
  selectedValue,
  onValueChange,
  layout = 'vertical',
  containerStyle,
  radioContainerStyle,
  label,
  labelStyle,
  disabled = false,
  radioSize,
  radioLabelPosition,
  selectedIconName,
  unselectedIconName,
  iconFamily,
}: RadioButtonGroupProps<T>) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={[styles.groupContainer, containerStyle]}>
      {label && <Text style={[styles.groupLabel, labelStyle]}>{label}</Text>}
      <View style={layout === 'horizontal' ? styles.horizontalContainer : styles.verticalContainer}>
        {options.map((option) => (
          <StyledRadioButton
            key={String(option.value)} // Asegurar que la key sea string
            label={option.label}
            selected={selectedValue === option.value}
            onPress={() => onValueChange(option.value)}
            disabled={disabled || option.disabled}
            // Props individuales pasadas a StyledRadioButton
            size={radioSize}
            labelPosition={radioLabelPosition}
            selectedIconName={selectedIconName}
            unselectedIconName={unselectedIconName}
            iconFamily={iconFamily}
            // Estilos para el contenedor de cada radio individual (incluyendo su etiqueta)
            containerStyle={radioContainerStyle}
          />
        ))}
      </View>
    </View>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    groupContainer: {
      marginBottom: theme.spacing.medium,
    },
    groupLabel: {
      fontSize: theme.typography.fontSizes.medium,
      fontWeight: theme.typography.weights.semiBold,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.small,
      fontFamily: theme.typography.fontFamilyRegular,
    },
    verticalContainer: {
      // Por defecto, los StyledRadioButton ya tienen un marginBottom
    },
    horizontalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap', // Permitir que los items pasen a la siguiente línea si no caben
    },
  });

export default RadioButtonGroup; 