# Documentación de Arquitectura: SoulDream

## 1. Introducción

Este documento describe la estructura de directorios y la arquitectura general del proyecto SoulDream, comprendiendo el frontend (aplicación web existente) y el backend. Esta información es crucial para entender cómo los componentes interactúan y cómo una nueva aplicación móvil (desarrollada con React Native y Expo) puede integrarse con el backend existente.

## 2. Estructura del Frontend (`frontend/src/`)

La siguiente estructura de directorios fue generada para `frontend/src` utilizando el comando `tree`, mostrando los directorios principales hasta una profundidad de 3 niveles e ignorando carpetas comunes como `node_modules`:

```
frontend/src/
├── adapters
├── app
│   ├── api
│   │   ├── analytics
│   │   ├── insights
│   │   ├── paypal
│   │   ├── send-email
│   │   ├── subscriptions
│   │   ├── v1
│   │   └── webhooks
│   ├── auth
│   │   ├── callback
│   │   └── reconnect
│   ├── contact
│   ├── cookies
│   ├── dashboard
│   │   ├── ai-assistant
│   │   ├── ai-chat
│   │   ├── ai-chat-old
│   │   ├── analytics
│   │   ├── calendar
│   │   ├── finance
│   │   ├── goals
│   │   ├── habits
│   │   ├── profile
│   │   ├── settings
│   │   ├── tasks
│   │   └── workout
│   ├── index-test
│   ├── licenses
│   ├── pricing
│   ├── privacy
│   ├── subscription
│   │   ├── cancel
│   │   └── success
│   ├── terms
│   └── workout
├── components
│   ├── ai-chat
│   ├── analytics
│   ├── auth
│   ├── calendar
│   ├── contact
│   ├── dashboard
│   ├── dev
│   ├── finance
│   ├── goals
│   ├── habits
│   ├── icons
│   ├── landing
│   │   ├── cta
│   │   ├── faq
│   │   ├── features
│   │   ├── footer
│   │   └── hero
│   ├── profile
│   ├── providers
│   ├── settings
│   ├── shared
│   ├── subscription
│   ├── tasks
│   ├── ui
│   └── workout
├── data
├── hooks
│   ├── auth
│   └── goals
├── lib
│   ├── adapters
│   ├── ai
│   ├── api
│   ├── constants
│   ├── services
│   └── utils
├── patches
├── polyfills
├── providers
├── services
├── store
└── types
```

### Explicación de Carpetas Clave del Frontend:

*   **`app/`**: Corazón de la aplicación Next.js (utilizando el App Router).
    *   **`app/api/`**: Rutas de API específicas del frontend Next.js. Estas son para la comunicación interna del frontend o tareas del lado del servidor gestionadas por Next.js, y *no* son los endpoints principales que consumiría una app móvil.
    *   **`app/dashboard/`**, **`app/auth/`**, etc.: Directorios que organizan las diferentes rutas y vistas de la aplicación web.
    *   **`page.tsx`** (implícito dentro de las carpetas de ruta): Representan las páginas principales de cada ruta.
    *   **`layout.tsx`** (implícito): Define la estructura de UI compartida para las rutas.
*   **`components/`**: Colección de componentes React reutilizables.
    *   **`ui/`**: Componentes base de la interfaz de usuario (posiblemente de una librería como shadcn/ui).
    *   **`landing/`**, **`dashboard/`**, **`goals/`**, etc.: Componentes específicos para diferentes secciones o funcionalidades de la aplicación.
    *   **`shared/`**: Componentes genéricos utilizados en múltiples partes de la aplicación.
*   **`hooks/`**: Hooks personalizados de React para encapsular lógica con estado y efectos secundarios reutilizables.
*   **`lib/`**: Utilidades generales, clientes de API (para comunicarse con el backend principal), funciones de ayuda y lógica no vinculada directamente a componentes.
*   **`store/`**: Lógica de manejo de estado global (por ejemplo, usando Zustand, Redux o Context API avanzada).
*   **`types/`**: Definiciones de TypeScript para asegurar la tipificación en todo el proyecto frontend.
*   **`styles/`** (basado en la descripción inicial): Archivos de estilos globales, temas, y posiblemente animaciones.
*   **`adapters/`**: Probablemente para transformar datos o mediar entre diferentes servicios o formatos de datos dentro del frontend.
*   **`data/`**: Podría contener datos estáticos, mock data para desarrollo, o configuraciones relacionadas con la obtención de datos.
*   **`patches/`, `polyfills/`**: Código para modificar el comportamiento de dependencias o para asegurar compatibilidad con navegadores más antiguos.
*   **`providers/`**: Componentes proveedores de React Context para funcionalidades transversales como temas, estado de autenticación, etc.
*   **`services/`**: Servicios específicos del frontend que pueden orquestar llamadas a `lib/` o preparar datos para los componentes.

## 3. Estructura del Backend (`backend/app/`)

La siguiente estructura de directorios fue generada para `backend/app` utilizando el comando `tree`, mostrando los directorios principales:

```
backend/app/
├── api
│   ├── endpoints
│   └── v1
│       ├── Metas 
│       ├── ai
│       ├── calendar
│       ├── habits
│       ├── insights
│       ├── payments
│       └── subscriptions
├── auth
├── core
├── db
├── models
├── schemas
├── services
│   ├── ai
│   ├── calendar
│   └── payment
└── utils
```

### Explicación de Carpetas Clave del Backend:

*   **`api/`**: Punto de entrada para todas las solicitudes HTTP al backend.
    *   **`api/v1/`**: Contiene los endpoints para la versión 1 de la API. Las subcarpetas (ej: `Metas`, `ai`, `calendar`) agrupan los endpoints por recurso o funcionalidad. **Esta es la interfaz principal con la que interactuará la aplicación móvil.**
    *   **`api/endpoints/`**: Podría ser una forma alternativa de organizar los archivos de rutas o controladores si no están directamente en las carpetas de recursos de `v1`.
*   **`auth/`**: Lógica relacionada con la autenticación y autorización (ej: manejo de tokens JWT, verificación de credenciales, protección de rutas).
*   **`core/`**: Configuración central de la aplicación backend, como inicialización de la app, variables de entorno, y middleware principal.
*   **`db/`**: Configuración de la base de datos, scripts de migración, y posiblemente funciones de conexión.
*   **`models/`**: Definiciones de modelos de datos (ej: clases de SQLAlchemy, esquemas de Mongoose) que representan las tablas/colecciones de la base de datos.
*   **`schemas/`**: Esquemas de validación de datos (ej: Pydantic, Marshmallow) para las solicitudes y respuestas de la API, asegurando la integridad de los datos.
*   **`services/`**: Capa de lógica de negocio. Contiene la funcionalidad principal de la aplicación, separada de la lógica de la API y de la base de datos. Los controladores de la API suelen llamar a estos servicios.
    *   **`services/ai/`**, **`services/calendar/`**, **`services/payment/`**: Módulos específicos para cada área funcional.
*   **`utils/`**: Funciones de utilidad y helpers compartidos a lo largo del backend.

## 4. Interacción de la Aplicación Móvil con el Backend

La nueva aplicación móvil desarrollada con React Native y Expo consumirá directamente los endpoints expuestos por el **`backend/app/api/v1/`**.

*   **Llamadas HTTP:** La app móvil realizará llamadas HTTP (GET, POST, PUT, DELETE, etc.) a las rutas definidas en el backend (ej: `https://api.souldream.cl/api/v1/goals`, `https://api.souldream.cl/api/v1/auth/login`).
*   **Autenticación:** La app móvil deberá implementar un flujo de autenticación que envíe credenciales al backend, reciba un token (probablemente JWT) y lo almacene de forma segura para incluirlo en las cabeceras de las solicitudes posteriores a rutas protegidas.
*   **Manejo de Datos:** La app móvil enviará y recibirá datos en el formato esperado por el backend (generalmente JSON).

## 5. Diagramas de Secuencia

Para una comprensión más detallada de los flujos de interacción entre el frontend (móvil) y el backend para funcionalidades específicas (como inicio de sesión, creación de metas, etc.), consulta los diagramas de secuencia proporcionados anteriormente. Estos diagramas ilustran los mensajes y el orden de las operaciones entre los diferentes componentes del sistema.

---

Este documento sirve como una guía inicial. A medida que el proyecto evolucione, se recomienda mantener actualizada esta documentación. 