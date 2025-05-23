import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth as useFirebaseAuth } from '../hooks/useAuth'; // Renombrado para evitar colisión en este archivo

// Definir la forma del contexto de autenticación
interface UserInfo {
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
}

interface AuthContextType {
  user: UserInfo | null;
  appToken: string | null;
  isLoading: boolean; // Para la carga inicial de sesión
  isAuthenticating: boolean; // Para el proceso de login/logout
  isLoggedIn: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  redirectUriForConfig: string; // Para mostrarlo si es necesario
}

// Crear el contexto con un valor por defecto (puede ser undefined o un mock)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props para el AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Componente Proveedor del Contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useFirebaseAuth(); // Usamos el hook que ya creamos

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 