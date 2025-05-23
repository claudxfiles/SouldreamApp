import React from 'react';
import { ActivityIndicator, StyleSheet, View, StyleProp, ViewStyle, ActivityIndicatorProps } from 'react-native';
import { useTheme, Theme } from '../../contexts/ThemeContext';

export type LoadingIndicatorSize = 'small' | 'large' | number; // number para tamaño personalizado

interface LoadingIndicatorProps extends Omit<ActivityIndicatorProps, 'size'> {
  size?: LoadingIndicatorSize;
  color?: string;
  style?: StyleProp<ViewStyle>; // Estilo para el contenedor del ActivityIndicator
  isFullScreen?: boolean; // Para centrarlo en toda la pantalla
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size: propSize,
  color: propColor,
  style,
  isFullScreen = false,
  ...restOfProps
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const indicatorSize = propSize ?? 'large'; // Default RN size
  const indicatorColor = propColor ?? theme.colors.primary; // Default color from theme

  if (isFullScreen) {
    return (
      <View style={[styles.fullScreenContainer, style]}>
        <ActivityIndicator size={indicatorSize} color={indicatorColor} {...restOfProps} />
      </View>
    );
  }

  return (
    <ActivityIndicator
      size={indicatorSize}
      color={indicatorColor}
      style={style} // Aplicar estilo directamente si no es fullScreen
      {...restOfProps}
    />
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    fullScreenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background, // O un overlay semitransparente
      position: 'absolute', // Para cubrir toda la pantalla
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000, // Para estar por encima de otros contenidos
    },
  });

export default LoadingIndicator; 