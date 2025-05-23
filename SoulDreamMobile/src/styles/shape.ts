// Basado en --radius de globals.css y tailwind.config.ts
// --radius: 0.5rem; (8px si 1rem = 16px)
// md: calc(var(--radius) - 2px) -> 6px
// sm: calc(var(--radius) - 4px) -> 4px

export const radii = {
  none: 0,
  sm: 4,   // sm: 'calc(var(--radius) - 4px)'
  md: 6,   // md: 'calc(var(--radius) - 2px)'
  lg: 8,   // lg: 'var(--radius)'
  xl: 12,  // Un poco más grande para elementos mayores
  full: 9999, // Para hacer círculos (ej. avatares)
};

// Ejemplo de uso:
// import { radii } from './shape';
// const styles = StyleSheet.create({
//   card: {
//     borderRadius: radii.lg, // 8
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: radii.full, // 9999
//   }
// }); 