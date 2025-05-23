import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons'; // Asegúrate de que @expo/vector-icons está instalado

// Definimos los tipos de familia de iconos disponibles
export type IconFamily = 
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

interface IconProps {
  family: IconFamily;
  name: any; // El tipo del nombre del icono varía según la familia, 'any' por simplicidad aquí
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const iconComponents: Record<IconFamily, React.ComponentType<any>> = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

const Icon: React.FC<IconProps> = ({
  family,
  name,
  size: propSize,
  color: propColor,
  style,
}) => {
  const { theme } = useTheme();

  const IconComponent = iconComponents[family];

  if (!IconComponent) {
    console.warn(`Icon family "${family}" not found.`);
    return null; // O un icono de fallback
  }

  const iconSize = propSize ?? theme.typography.fontSizes.large; // Default size from theme
  const iconColor = propColor ?? theme.colors.textPrimary;    // Default color from theme

  return (
    <IconComponent
      name={name}
      size={iconSize}
      color={iconColor}
      style={style}
    />
  );
};

export default Icon; 