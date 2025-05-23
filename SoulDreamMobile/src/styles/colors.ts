export interface ColorPalette {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  // Podríamos añadir los de chart si son necesarios pronto
}

// Valores HSL de globals.css (Light Theme)
// --background: 0 0% 100%;                     -> hsl(0, 0%, 100%)    -> #FFFFFF
// --foreground: 222.2 84% 4.9%;              -> hsl(222.2, 84%, 4.9%) -> #0A213E (aprox)
// --card: 0 0% 100%;                          -> hsl(0, 0%, 100%)    -> #FFFFFF
// --card-foreground: 222.2 84% 4.9%;       -> hsl(222.2, 84%, 4.9%) -> #0A213E (aprox)
// --popover: 0 0% 100%;                       -> hsl(0, 0%, 100%)    -> #FFFFFF
// --popover-foreground: 222.2 84% 4.9%;    -> hsl(222.2, 84%, 4.9%) -> #0A213E (aprox)
// --primary: 221.2 83.2% 53.3%;             -> hsl(221.2, 83.2%, 53.3%) -> #2A79E2 (aprox)
// --primary-foreground: 210 40% 98%;        -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --secondary: 210 40% 96.1%;               -> hsl(210, 40%, 96.1%) -> #ECF2F9 (aprox)
// --secondary-foreground: 222.2 47.4% 11.2%;-> hsl(222.2, 47.4%, 11.2%) -> #0F1A2A (aprox)
// --muted: 210 40% 96.1%;                   -> hsl(210, 40%, 96.1%) -> #ECF2F9 (aprox)
// --muted-foreground: 215.4 16.3% 46.9%;    -> hsl(215.4, 16.3%, 46.9%) -> #6A7A8F (aprox)
// --accent: 210 40% 96.1%;                  -> hsl(210, 40%, 96.1%) -> #ECF2F9 (aprox)
// --accent-foreground: 222.2 47.4% 11.2%;   -> hsl(222.2, 47.4%, 11.2%) -> #0F1A2A (aprox)
// --destructive: 0 84.2% 60.2%;             -> hsl(0, 84.2%, 60.2%) -> #E52727 (aprox)
// --destructive-foreground: 210 40% 98%;   -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --border: 214.3 31.8% 91.4%;              -> hsl(214.3, 31.8%, 91.4%) -> #E3E8EF (aprox)
// --input: 214.3 31.8% 91.4%;               -> hsl(214.3, 31.8%, 91.4%) -> #E3E8EF (aprox)
// --ring: 221.2 83.2% 53.3%;                -> hsl(221.2, 83.2%, 53.3%) -> #2A79E2 (aprox)

export const lightColors: ColorPalette = {
  background: '#FFFFFF',
  foreground: '#0A213E', // Ajustado para mayor contraste/legibilidad que un HSL puro muy oscuro
  card: '#FFFFFF',
  cardForeground: '#0A213E',
  popover: '#FFFFFF',
  popoverForeground: '#0A213E',
  primary: '#2A79E2',
  primaryForeground: '#F0F5FA',
  secondary: '#ECF2F9',
  secondaryForeground: '#0F1A2A',
  muted: '#ECF2F9',
  mutedForeground: '#6A7A8F',
  accent: '#ECF2F9',       // Mismo que secondary por ahora, se puede diferenciar si es necesario
  accentForeground: '#0F1A2A',
  destructive: '#E52727',
  destructiveForeground: '#F0F5FA',
  border: '#E3E8EF',
  input: '#E3E8EF',
  ring: '#2A79E2',
};

// Valores HSL de globals.css (Dark Theme)
// --background: 222.2 84% 4.9%;             -> hsl(222.2, 84%, 4.9%) -> #0A213E (aprox)
// --foreground: 210 40% 98%;               -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --card: 222.2 84% 4.9%;                   -> hsl(222.2, 84%, 4.9%) -> #0A213E (aprox)
// --card-foreground: 210 40% 98%;        -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --popover: 222.2 84% 4.9%;                -> hsl(222.2, 84%, 4.9%) -> #0A213E (aprox)
// --popover-foreground: 210 40% 98%;     -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --primary: 217.2 91.2% 59.8%;            -> hsl(217.2, 91.2%, 59.8%) -> #3B82F6 (Más brillante que el light primary)
// --primary-foreground: 222.2 47.4% 11.2%;-> hsl(222.2, 47.4%, 11.2%) -> #0F1A2A (aprox)
// --secondary: 217.2 32.6% 17.5%;          -> hsl(217.2, 32.6%, 17.5%) -> #1E293B (aprox)
// --secondary-foreground: 210 40% 98%;    -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --muted: 217.2 32.6% 17.5%;              -> hsl(217.2, 32.6%, 17.5%) -> #1E293B (aprox)
// --muted-foreground: 215 20.2% 65.1%;     -> hsl(215, 20.2%, 65.1%) -> #8C9AAE (aprox)
// --accent: 217.2 32.6% 17.5%;             -> hsl(217.2, 32.6%, 17.5%) -> #1E293B (aprox)
// --accent-foreground: 210 40% 98%;        -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --destructive: 0 62.8% 30.6%;            -> hsl(0, 62.8%, 30.6%) -> #9B1C1C (aprox)
// --destructive-foreground: 210 40% 98%;  -> hsl(210, 40%, 98%)  -> #F0F5FA (aprox)
// --border: 217.2 32.6% 17.5%;             -> hsl(217.2, 32.6%, 17.5%) -> #1E293B (aprox)
// --input: 217.2 32.6% 17.5%;              -> hsl(217.2, 32.6%, 17.5%) -> #1E293B (aprox)
// --ring: 224.3 76.3% 48%;                 -> hsl(224.3, 76.3%, 48%) -> #3C6FD5 (aprox)

export const darkColors: ColorPalette = {
  background: '#0A213E',
  foreground: '#F0F5FA',
  card: '#0A213E',
  cardForeground: '#F0F5FA',
  popover: '#0A213E',
  popoverForeground: '#F0F5FA',
  primary: '#3B82F6', // Un azul más brillante para destacar en fondo oscuro
  primaryForeground: '#0F1A2A', // Texto oscuro sobre primario brillante
  secondary: '#1E293B',
  secondaryForeground: '#F0F5FA',
  muted: '#1E293B',
  mutedForeground: '#8C9AAE',
  accent: '#1E293B',      // Mismo que secondary por ahora
  accentForeground: '#F0F5FA',
  destructive: '#9B1C1C', // Un rojo más oscuro para dark mode
  destructiveForeground: '#F0F5FA',
  border: '#1E293B',
  input: '#1E293B',
  ring: '#3C6FD5',
};

// Podríamos tener una función para obtener el tema actual o un objeto AppTheme
// export const AppColors = Appearance.getColorScheme() === 'dark' ? darkColors : lightColors; 