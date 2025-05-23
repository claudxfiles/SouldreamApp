# Gestor de Fases del Proyecto: SoulDream App Móvil (React Native/Expo)

## Introducción

Este documento define un plan de proyecto en 20 fases para el desarrollo de la aplicación móvil SoulDream utilizando React Native y Expo. El objetivo es portar y adaptar la funcionalidad existente del frontend web, aprovechando el backend actual, para ofrecer una experiencia nativa optimizada en dispositivos smartphone. Este "Gestor de Fases" actuará como nuestra hoja de ruta principal.

--- 

## Fases del Proyecto

### Parte I: Planificación y Configuración (Fases 1-3)

**Fase 1: Revisión Detallada de Funcionalidad Web y Definición de Alcance Móvil**
*   **Objetivo:** Analizar exhaustivamente el frontend web actual. Identificar qué funcionalidades se portarán 1:1, cuáles requerirán adaptación significativa para la UX móvil, y cuáles podrían ser despriorizadas o excluidas de la versión inicial. Establecer prioridades claras para el MVP (Producto Mínimo Viable) móvil.
*   **Actividades Clave:** Sesiones de revisión funcional, priorización (MoSCoW), documentación de requisitos específicos para móvil.
*   **Entregables:**
    *   Documento de Alcance Móvil (listado de funcionalidades y su tratamiento).
    *   Backlog priorizado para la app móvil.

**Fase 2: Configuración del Proyecto React Native/Expo y Estructura Base**
*   **Objetivo:** Inicializar el nuevo proyecto React Native utilizando Expo (con plantilla TypeScript). Configurar herramientas esenciales como ESLint, Prettier, y Husky. Definir y crear la estructura de directorios principal para la aplicación móvil, siguiendo las mejores prácticas de modularidad.
*   **Actividades Clave:** `create-expo-app`, instalación de dependencias (React Navigation, gestor de estado, etc.), configuración de linters/formatters, creación de carpetas base (ej: `src/screens`, `src/components`, `src/navigation`, `src/services`, `src/hooks`, `src/store`, `src/types`, `src/assets`, `src/config`, `src/utils`).
*   **Entregables:**
    *   Repositorio del proyecto móvil inicializado y configurado.
    *   Estructura de directorios base creada.

**Fase 3: Diseño de la Experiencia de Usuario (UX) y Navegación Principal Móvil**
*   **Objetivo:** Diseñar los flujos de navegación principales de la aplicación móvil (ej., TabNavigator para secciones principales, StackNavigators para flujos internos). Crear wireframes o mockups de baja/media fidelidad para las pantallas clave, enfocándose en adaptar la UX web a patrones intuitivos y eficientes en móviles.
*   **Actividades Clave:** Diseño de diagramas de flujo de usuario, wireframing, prototipado básico de la navegación.
*   **Entregables:**
    *   Diagrama de Navegación de la App.
    *   Wireframes/Mockups para las pantallas principales.

### Parte II: Desarrollo del Núcleo de la Aplicación (Fases 4-8)

**Fase 4: Implementación del Módulo de Autenticación con Google**
*   **Objetivo:** Homologar el sistema de autenticación del frontend web, enfocándose en el inicio de sesión con Google. Desarrollar las pantallas y la lógica necesaria para que los usuarios se autentiquen utilizando sus cuentas de Google. Integrar con los endpoints de autenticación del backend (`/api/v1/auth/...`) que manejan el flujo OAuth de Google. Implementar el almacenamiento seguro de tokens de autenticación (ej. `expo-secure-store`) y la gestión de la sesión del usuario. Configurar la protección de rutas autenticadas.
*   **Actividades Clave:** Configuración de Expo Auth Session o `expo-google-sign-in`, desarrollo de UI para el botón "Iniciar sesión con Google", lógica de manejo del flujo OAuth 2.0 con el backend, manejo de tokens, navegación condicional.
*   **Entregables:**
    *   Flujo de autenticación con Google completamente funcional, similar al del frontend web.
    *   Manejo de sesión de usuario y protección de rutas.

**Fase 5: Desarrollo del Layout Principal y Componentes Compartidos (UI Kit Móvil)**
*   **Objetivo:** Crear el layout base de la aplicación (ej. cabeceras personalizadas, menús, contenedores de pantalla) y un conjunto de componentes de UI reutilizables (botones, inputs, cards, modales, spinners de carga) que se utilizarán en toda la aplicación. Estos deben estar optimizados para la experiencia móvil y seguir una guía de estilo coherente.
*   **Actividades Clave:** Desarrollo de componentes de layout, creación de un pequeño UI kit interno.
*   **Entregables:**
    *   Layout principal de la aplicación implementado.
    *   Biblioteca de componentes compartidos listos para usar.

**Fase 6: Implementación del Dashboard Principal Móvil**
*   **Objetivo:** Desarrollar la pantalla principal que el usuario ve después de iniciar sesión. Esta pantalla debe presentar un resumen de la información más relevante y accesos directos a las funcionalidades clave, adaptando la información del dashboard web a un formato móvil efectivo.
*   **Actividades Clave:** Diseño de UI del dashboard, integración de datos (inicialmente mockeados si es necesario, luego con API reales de resumen).
*   **Entregables:**
    *   Dashboard móvil funcional y visualmente atractivo.

**Fase 7: Módulo de Gestión de Perfil de Usuario y Configuración**
*   **Objetivo:** Permitir a los usuarios ver y editar la información de su perfil. Implementar la pantalla de configuración de la aplicación (ej. preferencias de notificaciones, tema oscuro/claro si aplica, etc.). Conexión con los endpoints de usuario del backend.
*   **Actividades Clave:** Desarrollo de UI de perfil y configuración, integración con APIs de usuario.
*   **Entregables:**
    *   Pantallas de perfil y configuración funcionales.

**Fase 8: Configuración Inicial y Pruebas de Notificaciones Push**
*   **Objetivo:** Integrar un servicio de notificaciones push (ej. Expo Notifications). Configurar la obtención del token de notificación del dispositivo y realizar pruebas básicas para enviar y recibir notificaciones desde un backend de prueba o directamente (para validar la configuración).
*   **Actividades Clave:** Configuración de Expo Notifications, manejo de permisos, envío de notificaciones de prueba.
*   **Entregables:**
    *   Capacidad básica de recibir notificaciones push en la app.

### Parte III: Desarrollo de Funcionalidades Clave (Homologación Web) (Fases 9-16)

*(Nota: El orden exacto dentro de esta parte puede ajustarse según la priorización definida en la Fase 1. Se asume la conexión a los endpoints del backend definidos en `PROJECT_DOCUMENTATION.md`)*

**Fase 9: Módulo de Metas (Goals)**
*   **Objetivo:** Homologar la funcionalidad de creación, visualización, edición, y seguimiento de metas. Adaptar la UI/UX para una gestión eficiente en móviles.
*   **Entregables:** Sección de Metas completamente funcional en la app móvil.

**Fase 10: Módulo de Hábitos (Habits)**
*   **Objetivo:** Homologar la funcionalidad de creación, visualización, seguimiento (check-in), y estadísticas de hábitos.
*   **Entregables:** Sección de Hábitos completamente funcional.

**Fase 11: Módulo de Finanzas (Finance)**
*   **Objetivo:** Adaptar la funcionalidad de gestión financiera del frontend web a la app móvil. Esto incluye visualización de transacciones, saldos, y posiblemente herramientas de planificación o ahorro, según el alcance definido.
*   **Entregables:** Sección de Finanzas funcional.

**Fase 12: Módulo de Ejercicios (Workout)**
*   **Objetivo:** Homologar la funcionalidad de creación/selección de rutinas de ejercicios, seguimiento de series/repeticiones, y visualización del progreso.
*   **Entregables:** Sección de Ejercicios (Workout) completamente funcional.

**Fase 13: Módulo de Calendario e Integración de Eventos/Tareas**
*   **Objetivo:** Implementar una vista de calendario robusta. Integrar eventos provenientes de metas, hábitos, y workouts para una visualización unificada de las actividades del usuario.
*   **Entregables:** Calendario funcional con eventos de diferentes módulos integrados.

**Fase 14: Módulo de Asistente AI / Chat AI**
*   **Objetivo:** Desarrollar la interfaz de usuario para el chat con el asistente de IA. Implementar la comunicación con los endpoints de IA del backend para enviar mensajes y recibir respuestas.
*   **Entregables:** Funcionalidad de Chat AI operativa en la app móvil.

**Fase 15: Módulo de Analíticas e Insights Móviles**
*   **Objetivo:** Presentar las analíticas y los insights de progreso del usuario de una manera clara y comprensible en la interfaz móvil. Adaptar los gráficos y las visualizaciones del frontend web.
*   **Entregables:** Pantallas de Analíticas e Insights funcionales.

**Fase 16: Módulo de Suscripciones y Pagos (si aplica In-App)**
*   **Objetivo:** Implementar la visualización de planes de suscripción. Si se utilizan compras In-App, integrar con las APIs de las tiendas (Apple App Store, Google Play Store) a través de Expo o bibliotecas de terceros. Si el pago es web, asegurar una transición fluida a una WebView.
*   **Entregables:** Flujo de visualización y (si aplica) compra/gestión de suscripciones funcional.

### Parte IV: Pruebas, Optimización y Despliegue (Fases 17-20)

**Fase 17: Pruebas de Integración y QA Exhaustivo**
*   **Objetivo:** Realizar pruebas completas de todos los flujos de la aplicación en múltiples dispositivos (iOS y Android) y versiones de OS. Identificar y corregir bugs. Validar la integración con el backend y la consistencia de los datos.
*   **Actividades Clave:** Pruebas funcionales, pruebas de UI/UX, pruebas de regresión, pruebas de usabilidad.
*   **Entregables:**
    *   Reporte de QA detallado.
    *   Aplicación estabilizada con bugs críticos y mayores corregidos.

**Fase 18: Optimización de Rendimiento y Recursos**
*   **Objetivo:** Perfilar la aplicación para identificar cuellos de botella en el rendimiento. Optimizar tiempos de carga, uso de memoria, animaciones, y la respuesta general de la UI. Reducir el tamaño del bundle de la aplicación si es posible.
*   **Actividades Clave:** Uso de herramientas de profiling (Flipper, React DevTools), optimización de renderizado de listas, compresión de assets.
*   **Entregables:**
    *   Mejoras de rendimiento implementadas y documentadas.

**Fase 19: Preparación para Despliegue (EAS Build & Submit)**
*   **Objetivo:** Configurar completamente el archivo `app.json` (o `app.config.js`) para producción (versiones, permisos, orientaciones, etc.). Generar todos los assets necesarios (íconos, splash screens) en las resoluciones correctas. Configurar y utilizar EAS Build para compilar los binarios de producción (IPA para iOS, AAB/APK para Android). Realizar envíos a TestFlight (iOS) y Google Play Console (canal de pruebas interno/beta) para las pruebas finales.
*   **Actividades Clave:** Gestión de certificados y perfiles de aprovisionamiento, configuración de EAS, compilaciones de producción.
*   **Entregables:**
    *   Builds de producción (.ipa, .aab) listos para revisión en las tiendas.
    *   Aplicación disponible en TestFlight y Google Play Console para pruebas cerradas.

**Fase 20: Despliegue en Tiendas, Monitoreo Post-Lanzamiento y Documentación Final**
*   **Objetivo:** Enviar las aplicaciones compiladas a la App Store de Apple y Google Play Store para su revisión y publicación. Una vez aprobada, lanzar la aplicación. Implementar herramientas de monitoreo de errores (ej. Sentry con Expo) y analíticas básicas de uso. Documentar la arquitectura final y las decisiones clave tomadas durante el desarrollo móvil.
*   **Actividades Clave:** Proceso de envío a tiendas, configuración de Sentry/Firebase Crashlytics, creación de documentación final.
*   **Entregables:**
    *   Aplicación publicada en las tiendas.
    *   Sistema de monitoreo de errores activo.
    *   Documentación técnica final de la app móvil.

---

Este Gestor de Fases es un documento vivo y puede ajustarse según las necesidades y descubrimientos del proyecto. Cada fase se descompondrá en tareas más detalladas a medida que avancemos. 