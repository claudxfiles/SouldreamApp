// Inspirado en la escala de Tailwind (1 unidad = 0.25rem = 4px si 1rem=16px)
// Estos son valores numéricos que se pueden usar directamente en estilos.
export const spacing = {
  px: 1,      // 1px, para bordes finos o ajustes mínimos
  xxs: 2,     // 0.5 unidades de Tailwind (2px)
  xs: 4,      // 1 unidad de Tailwind (4px)
  sm: 8,      // 2 unidades de Tailwind (8px)
  md: 12,     // 3 unidades de Tailwind (12px)
  lg: 16,     // 4 unidades de Tailwind (16px) - Buen padding base
  xl: 20,     // 5 unidades de Tailwind (20px)
  xxl: 24,    // 6 unidades de Tailwind (24px)
  xxxl: 32,   // 8 unidades de Tailwind (32px)
  xxxxl: 40,  // 10 unidades de Tailwind (40px)
  xxxxxl: 48, // 12 unidades de Tailwind (48px)
  // Puedes añadir más según sea necesario
};

// Ejemplo de uso:
// import { spacing } from './spacing';
// const styles = StyleSheet.create({
//   container: {
//     padding: spacing.lg, // 16
//     marginVertical: spacing.md, // 12
//   }
// }); 