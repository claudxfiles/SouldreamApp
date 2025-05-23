import React from 'react';
import {
  Switch as RNSwitch,
  View,
  Text,
  StyleSheet,
  SwitchProps as RNSwitchProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';
import { useTheme, Theme } from '../../contexts/ThemeContext';

interface StyledSwitchProps extends RNSwitchProps {
  label?: string;
  labelPosition?: 'left' | 'right';
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  // Las props principales como value, onValueChange, disabled son heredadas de RNSwitchProps
}

const StyledSwitch: React.FC<StyledSwitchProps> = ({
  label,
  labelPosition = 'right',
  containerStyle,
  labelStyle,
  value,
  disabled,
  onValueChange,
  ...restOfProps
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const trackColor = {
    false: disabled ? theme.colors.borderDisabled : theme.colors.neutral, // Color cuando está apagado
    true: disabled ? theme.colors.primaryDark : theme.colors.primary, // Color cuando está encendido
  };

  const thumbColor = Platform.OS === 'android' 
    ? (value ? theme.colors.surface : theme.colors.surface) // En Android, el thumb suele ser blanco o gris claro
    : undefined; // En iOS, el thumb es blanco por defecto y no suele necesitarse cambiar

  const switchComponent = (
    <RNSwitch
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={trackColor.false} // Para el fondo del track en iOS cuando está apagado
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      style={Platform.OS === 'ios' ? styles.iosSwitch : {}}
      {...restOfProps}
    />
  );

  if (!label) {
    return switchComponent;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {labelPosition === 'left' && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {switchComponent}
      {labelPosition === 'right' && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </View>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.medium, // Espacio si se usa en una lista de configuraciones
    },
    label: {
      fontSize: theme.typography.fontSizes.medium,
      color: theme.colors.textPrimary,
      fontFamily: theme.typography.fontFamilyRegular,
      marginHorizontal: theme.spacing.small,
    },
    iosSwitch: {
      // En iOS, a veces el Switch puede necesitar un pequeño ajuste de margen si está junto a una etiqueta
      // Esto es opcional y depende del diseño final
      // transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // Para hacerlo un poco más pequeño si se desea
    },
  });

export default StyledSwitch; 