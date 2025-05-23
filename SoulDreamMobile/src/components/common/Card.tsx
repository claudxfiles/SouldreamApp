import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme, Theme } from '../../contexts/ThemeContext';

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void; // Hacer la tarjeta clickeable opcionalmente
  // Podríamos añadir variantes como 'outlined', 'elevated', 'flat' si es necesario
  // o props para secciones de header/footer/body
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  ...restOfProps // Para pasar otras props de TouchableOpacity como activeOpacity
}) => {
  const { theme } = useTheme();
  const styles = makeStyles(theme);

  const cardContent = (
    <View style={[styles.cardBase, style]}>
      {children}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={theme.effects.activeOpacity} {...restOfProps}>
        {cardContent}
      </TouchableOpacity>
    );
  }

  return cardContent; // Si no hay onPress, renderizar solo el View
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    cardBase: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.shapes.borderRadiusMedium,
      padding: theme.spacing.medium, // Padding interno por defecto
      // Sombras y elevación
      shadowColor: theme.effects.shadowColor,
      shadowOffset: theme.effects.shadowOffset,
      shadowOpacity: theme.effects.shadowOpacity,
      shadowRadius: theme.effects.shadowRadius,
      elevation: theme.effects.elevation, // Para Android
      // Borde sutil (opcional, podría ser una variante)
      // borderWidth: 1,
      // borderColor: theme.colors.border,
      marginBottom: theme.spacing.medium, // Margen inferior por defecto para separar cards en una lista
    },
  });

export default Card; 