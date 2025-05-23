# ✅ TASK BOARD: SoulDream App Móvil

## 🚀 Fase Actual

*   **Fase 5: Autenticación Robusta (con Google)**
    *   **Objetivo:** Implementar un flujo de autenticación seguro y completo utilizando Google Sign-In, incluyendo el manejo de tokens, almacenamiento seguro y estado de sesión.
    *   **Próximos Pasos (propuestos por el experto):**
        1.  Confirmar librería de autenticación (`expo-auth-session`) y cliente HTTP (`axios`).
        2.  Instalar dependencias: `expo-auth-session`, `expo-web-browser`, `expo-secure-store`, `axios`.
        3.  Configurar credenciales de cliente OAuth 2.0 de Google (requiere intervención del usuario para obtenerlas).
        4.  Desarrollar hook `useAuth` para manejar el flujo de autenticación y la gestión de tokens.
        5.  Crear `AuthContext` y `AuthProvider` para el estado de autenticación global.
        6.  Implementar almacenamiento seguro de tokens con `expo-secure-store`.
        7.  (Backend) Preparar endpoint para intercambio de token de Google por token de sesión de SoulDream.
        8.  Integrar `useAuth` con el endpoint del backend.
        9.  Crear pantallas básicas de Login y Perfil (placeholder) para probar el flujo.
        10. Implementar navegación condicional (rutas protegidas vs. públicas).

## ☑️ Completado Anteriormente

*   [x] **Fase 4: Desarrollo del UI Kit Móvil y Layouts Globales**
    *   **Objetivo:** Crear un conjunto de componentes de UI reutilizables y layouts de pantalla comunes que aseguren consistencia visual y una base sólida para las funcionalidades de la aplicación.
    *   **Componentes Creados:**
        *   Theming (Light/Dark) (`themes.ts`, `ThemeContext.tsx`)
        *   `Button.tsx`
        *   `StyledTextInput.tsx`
        *   `ScreenWrapper.tsx` (Layout Global)
        *   `Icon.tsx`
        *   `Card.tsx`
        *   `LoadingIndicator.tsx`
        *   `Modal.tsx`
        *   `StyledSwitch.tsx`
        *   `StyledCheckbox.tsx`
        *   `StyledRadioButton.tsx`
        *   `RadioButtonGroup.tsx`

*   [x] **Fase 2:** Configuración del Proyecto React Native/Expo y Estructura Base
    *   **Objetivo:** Inicializar el nuevo proyecto React Native utilizando Expo (con plantilla TypeScript). Configurar herramientas esenciales como ESLint, Prettier, y Husky. Definir y crear la estructura de directorios principal para la aplicación móvil, siguiendo las mejores prácticas de modularidad.
    *   **Pasos Completados:**
        1.  [x] Ejecutar `npx create-expo-app SoulDreamMobile --template typescript` para crear el proyecto.
        2.  [x] Instalar dependencias esenciales: `react-navigation` (y sus dependencias: `react-native-screens`, `react-native-safe-area-context`), gestor de estado (`zustand`), cliente HTTP (`axios`).
        3.  [x] Configurar ESLint, Prettier y Husky para calidad de código y hooks de git.
        4.  [x] Crear la estructura de directorios base (`src/screens`, `src/components/common`, `src/navigation`, `src/services/api`, `src/hooks`, `src/store`, `src/types`, `src/assets`, `src/config`, `src/utils`, `src/theme`, `src/contexts`).
        5.  [x] Configurar `tsconfig.json` con `strict: true`.
*   [x] **Fase 1:** Revisión Detallada de Funcionalidad Web y Definición de Alcance Móvil
    *   *Entregables Generados: `DOCUMENTO_ALCANCE_MOVIL.md`, `BACKLOG_MVP_MOVIL.md`*

---

## 🗺️ Hoja de Ruta del Proyecto (Fases)

### Parte I: Planificación y Configuración (Fases 1-2 FINALIZADA)

*   [x] **Fase 1:** Revisión Detallada de Funcionalidad Web y Definición de Alcance Móvil
*   [x] **Fase 2:** Configuración del Proyecto React Native/Expo y Estructura Base

### Parte II: Desarrollo del Núcleo de la Aplicación (Fases 4-8)

*   [x] **Fase 4:** Desarrollo del UI Kit Móvil y Layouts Globales
*   [ ] **Fase 5:** Autenticación Robusta (con Google) *(Anteriormente Fase 3)*
*   [ ] **Fase 6:** Implementación del Dashboard Principal Móvil
*   [ ] **Fase 7:** Módulo de Gestión de Perfil de Usuario y Configuración
*   [ ] **Fase 8:** Configuración Inicial y Pruebas de Notificaciones Push

### Parte III: Desarrollo de Funcionalidades Clave (Homologación Web) (Fases 9-16)

*   [ ] **Fase 9:** Módulo de Metas (Goals)
*   [ ] **Fase 10:** Módulo de Hábitos (Habits)
*   [ ] **Fase 11:** Módulo de Finanzas (Finance) - (Post-MVP)
*   [ ] **Fase 12:** Módulo de Ejercicios (Workout) - (Post-MVP, enfocado en IA)
*   [ ] **Fase 13:** Módulo de Calendario e Integración de Eventos/Tareas
*   [ ] **Fase 14:** Módulo de Asistente AI / Chat AI - (Post-MVP)
*   [ ] **Fase 15:** Módulo de Analíticas e Insights Móviles - (Post-MVP)
*   [ ] **Fase 16:** Módulo de Suscripciones y Pagos (si aplica In-App) - (Post-MVP)

### Parte IV: Pruebas, Optimización y Despliegue (Fases 17-20)

*   [ ] **Fase 17:** Pruebas de Integración y QA Exhaustivo
*   [ ] **Fase 18:** Optimización de Rendimiento y Recursos
*   [ ] **Fase 19:** Preparación para Despliegue (EAS Build & Submit)
*   [ ] **Fase 20:** Despliegue en Tiendas, Monitoreo Post-Lanzamiento y Documentación Final

---

*Este tablero se actualizará a medida que avancemos en el proyecto. Cada vez que completemos una fase, la marcaremos y actualizaremos la "Fase Actual".* 