import { Appearance } from 'react-native';
import { lightColors, darkColors, ColorPalette } from './colors';
import { fonts, fontSizes, fontWeights, textVariants } from './typography';
import { spacing } from './spacing';
import { radii } from './shape';

export interface Theme {
  colors: ColorPalette;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  textVariants: typeof textVariants;
  spacing: typeof spacing;
  radii: typeof radii;
  // Podríamos añadir más adelante: breakpoints, zIndices, etc.
}

export const lightTheme: Theme = {
  colors: lightColors,
  fonts,
  fontSizes,
  fontWeights,
  textVariants,
  spacing,
  radii,
};

export const darkTheme: Theme = {
  colors: darkColors,
  fonts,
  fontSizes,
  fontWeights,
  textVariants,
  spacing,
  radii,
};

// Hook para obtener el tema actual o función
export const getAppTheme = (): Theme => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

// También podríamos crear un ThemeContext si queremos que el tema se actualice dinámicamente
// sin necesidad de que los componentes se re-rendericen por cambios en Appearance directamente,
// o si queremos permitir al usuario cambiar el tema manualmente.
// Por ahora, getAppTheme() puede ser suficiente para estilos iniciales.

// Re-exportar para acceso individual si se prefiere
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shape';
