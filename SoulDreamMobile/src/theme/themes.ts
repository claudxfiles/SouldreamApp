export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  textOnPrimary: string;
  textOnSecondary: string;
  error: string;
  success: string;
  warning: string;
  info: string;
  border: string;
  // Nuevos colores basados en la web
  textLight: string;
  textDark: string;
  primaryDark: string;
  secondaryDark: string;
  backgroundDisabled: string;
  borderDisabled: string;
  textDisabled: string;
}

export interface Typography {
  fontFamilyRegular: string;
  fontFamilyBold: string;
  fontFamilyLight: string; // Añadido
  fontFamilyMedium: string; // Añadido
  fontFamilySemiBold: string; // Añadido
  fontSizes: {
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    title1: number;
    title2: number;
    title3: number;
  };
  lineHeights: {
    small: number;
    medium: number;
    large: number;
  };
  weights: {
    light: '300';
    regular: '400';
    medium: '500';
    semiBold: '600';
    bold: '700';
  };
}

export interface Spacing {
  none: number;
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
  // Basado en Tailwind (1 unidad = 4px)
  xs: number; // 4px
  sm: number; // 8px
  md: number; // 12px (ejemplo, ajustar según uso)
  base: number; // 16px
  lg: number; // 24px
  xl: number; // 32px
  xxl: number; // 48px
}

export interface Shapes {
  borderRadiusSmall: number;
  borderRadiusMedium: number;
  borderRadiusLarge: number;
}

export interface Effects {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
  activeOpacity: number;
  disabledOpacity: number;
}

export interface Theme {
  name: 'light' | 'dark';
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  shapes: Shapes;
  effects: Effects;
}

const commonTypography: Omit<Typography, 'fontFamilyRegular' | 'fontFamilyBold' | 'fontFamilyLight' | 'fontFamilyMedium' | 'fontFamilySemiBold'> = {
  fontSizes: {
    extraSmall: 10,
    small: 12,
    medium: 14, // Ajustado para ser un poco más pequeño que la web base
    large: 16,
    extraLarge: 18,
    title1: 32,
    title2: 24,
    title3: 20,
  },
  lineHeights: {
    small: 16,
    medium: 20,
    large: 24,
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
};

const commonSpacing: Spacing = {
  none: 0,
  extraSmall: 4,
  small: 8,
  medium: 12, // Ajustado
  large: 16, // Ajustado
  extraLarge: 24, // Ajustado
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

const commonShapes: Shapes = {
  borderRadiusSmall: 4,
  borderRadiusMedium: 8,
  borderRadiusLarge: 16,
};

const commonEffects: Effects = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
  activeOpacity: 0.7,
  disabledOpacity: 0.5,
};


// Definiciones de colores específicos de SoulDream Web
const soulDreamWebColors = {
  primary: '#7E57C2', // Morado principal (ajustado de un ejemplo)
  secondary: '#AB47BC', // Morado secundario (ajustado de un ejemplo)
  accent: '#26A69A', // Verde azulado para acentos
  neutral: '#E0E0E0', // Gris claro para fondos neutros
  background: '#F5F5F5', // Fondo general de la app (claro)
  surface: '#FFFFFF', // Superficies como cards, modales (blanco)
  textPrimary: '#212121', // Texto principal oscuro
  textSecondary: '#757575', // Texto secundario más claro
  textOnPrimary: '#FFFFFF',
  textOnSecondary: '#FFFFFF',
  error: '#D32F2F', // Rojo para errores
  success: '#388E3C', // Verde para éxito
  warning: '#FBC02D', // Amarillo para advertencias
  info: '#1976D2', // Azul para información
  border: '#BDBDBD', // Color de borde general
  // Colores extraídos de tailwind.config.ts y globals.css
  textLight: '#F3F4F6', // text-gray-100
  textDark: '#1F2937',   // text-gray-800
  primaryDark: '#5E35B1', // Un morado más oscuro para el tema dark
  secondaryDark: '#8E24AA', // Un morado secundario más oscuro para el tema dark
  backgroundDisabled: '#EEEEEE', // Gris muy claro para fondos deshabilitados
  borderDisabled: '#E0E0E0', // Gris claro para bordes deshabilitados
  textDisabled: '#9E9E9E', // Gris medio para texto deshabilitado
};

const typographyBase = {
  fontFamilyRegular: 'System', // Usar fuentes del sistema por defecto
  fontFamilyBold: 'System',    // Podríamos cargar fuentes personalizadas más adelante
  fontFamilyLight: 'System',
  fontFamilyMedium: 'System',
  fontFamilySemiBold: 'System',
  ...commonTypography,
};

export const themes: { [key: string]: Theme } = {
  light: {
    name: 'light',
    colors: {
      ...soulDreamWebColors, // Usamos los colores base para el tema claro
    },
    typography: typographyBase,
    spacing: commonSpacing,
    shapes: commonShapes,
    effects: commonEffects,
  },
  dark: {
    name: 'dark',
    colors: {
      ...soulDreamWebColors, // Empezamos con los mismos, luego sobreescribimos
      primary: soulDreamWebColors.primaryDark, // Morado principal oscuro
      secondary: soulDreamWebColors.secondaryDark, // Morado secundario oscuro
      background: '#121212', // Fondo oscuro estándar
      surface: '#1E1E1E',    // Superficies ligeramente más claras que el fondo
      textPrimary: '#E0E0E0', // Texto principal claro
      textSecondary: '#BDBDBD', // Texto secundario un poco más oscuro
      textOnPrimary: '#FFFFFF', // Generalmente blanco en primario oscuro
      textOnSecondary: '#FFFFFF', // Generalmente blanco en secundario oscuro
      border: '#424242', // Borde oscuro
      // Mantener otros colores como error, success, etc., a menos que necesiten ajuste
      backgroundDisabled: '#2C2C2C', // Fondo deshabilitado oscuro
      borderDisabled: '#3C3C3C',   // Borde deshabilitado oscuro
      textDisabled: '#757575',    // Texto deshabilitado en tema oscuro
    },
    typography: typographyBase,
    spacing: commonSpacing,
    shapes: commonShapes,
    effects: {
        ...commonEffects,
        shadowColor: '#000', // Las sombras pueden ser más sutiles o diferentes en modo oscuro
        shadowOpacity: 0.3,
    },
  },
}; 