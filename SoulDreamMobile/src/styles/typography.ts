import { Platform, TextStyle } from 'react-native';

// Define las familias de fuentes base para cada plataforma
export const fonts = {
  default: Platform.select({
    ios: 'System', // San Francisco (SF Pro)
    android: 'sans-serif', // Roboto
    default: 'sans-serif',
  }),
  heading: Platform.select({
    ios: 'System', 
    android: 'sans-serif',
    default: 'sans-serif',
  }),
  // Puedes añadir más si es necesario, por ejemplo, una fuente monoespaciada
  // monospace: Platform.select({
  //   ios: 'Menlo',
  //   android: 'monospace',
  //   default: 'monospace'
  // })
};

// Define los tamaños de fuente
// Estos valores pueden ajustarse según el diseño visual.
// Es común usar una escala modular.
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16, // Tamaño base para el cuerpo del texto
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
  xxxxl: 36,
};

// Definir fontWeight con el tipo TextStyle['fontWeight'] para asegurar compatibilidad
export const fontWeights: { [key: string]: TextStyle['fontWeight'] } = {
  thin: '100',       // Puede no estar disponible en todas las fuentes/plataformas
  extraLight: '200', // "
  light: '300',      // "
  normal: '400',     // o 'normal'
  medium: '500',     // o 'normal' en algunas fuentes, o un peso intermedio
  semiBold: '600',   // o 'bold' en algunas fuentes
  bold: '700',       // o 'bold'
  extraBold: '800',  // Puede no estar disponible
  black: '900',      // Puede no estar disponible
};

// Estilos de texto predefinidos para consistencia
// Aseguramos que el fontWeight sea del tipo correcto
interface TextVariantStyle {
  fontFamily: string | undefined;
  fontSize: number;
  fontWeight: TextStyle['fontWeight'];
  // Podrías añadir lineHeight, letterSpacing, etc. aquí si es necesario
}

export const textVariants: { [key: string]: TextVariantStyle } = {
  heading1: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.xxxl,
    fontWeight: fontWeights.bold,
  },
  heading2: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.xxl,
    fontWeight: fontWeights.bold,
  },
  heading3: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semiBold,
  },
  heading4: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semiBold,
  },
  body: {
    fontFamily: fonts.default,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.normal,
  },
  bodyBold: {
    fontFamily: fonts.default,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold,
  },
  caption: {
    fontFamily: fonts.default,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
  },
  label: {
    fontFamily: fonts.default,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
  },
  button: {
    fontFamily: fonts.default,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium, // O bold, según el diseño del botón
  },
  // Puedes añadir más variantes según necesites
};

// Ejemplo de cómo podrías usar esto en un componente Text:
// import { Text } from 'react-native';
// import { textVariants } from './typography';
// import { colors } from './colors'; // Asumiendo que tienes un colors.ts
// 
// const MyComponent = () => (
//   <View>
//     <Text style={{ ...textVariants.heading1, color: colors.primary }}>Título Principal</Text>
//     <Text style={{ ...textVariants.body, color: colors.foreground }}>Este es un texto de cuerpo.</Text>
//   </View>
// ); 