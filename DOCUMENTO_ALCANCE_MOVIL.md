# Documento de Alcance Móvil (MVP - SoulDream App)

## 1. Introducción
Este documento define el alcance del Producto Mínimo Viable (MVP) para la aplicación móvil SoulDream, desarrollada con React Native y Expo. Se basa en el análisis funcional de la aplicación web existente y las APIs del backend. El objetivo es ofrecer un conjunto de funcionalidades esenciales con una experiencia de usuario móvil nativa y optimizada.

## 2. Funcionalidades del MVP

    **2.1. Autenticación con Google y Gestión de Sesión**
        *   **Descripción:** Permitir a los usuarios registrarse e iniciar sesión utilizando sus cuentas de Google. Gestionar de forma segura la sesión del usuario en la aplicación móvil.
        *   **Adaptación Web:** Homologar el flujo de autenticación con Google existente en la web.
        *   **Experiencia Móvil:** Botón "Iniciar sesión con Google" prominente. Flujo de OAuth nativo. Almacenamiento seguro de tokens (`expo-secure-store`). Protección de rutas que requieren autenticación.
        *   **Endpoints API Backend:**
            *   `POST /api/v1/auth/login` (el backend maneja el flujo OAuth de Google y devuelve un token de sesión)
            *   `POST /api/v1/auth/register` (el backend maneja el flujo OAuth de Google y la creación de perfil si es nuevo usuario)
            *   `GET /api/v1/auth/me` (para obtener datos del usuario y validar sesión)
        *   **Criterios de Aceptación:**
            *   Usuario puede iniciar sesión/registrarse con Google.
            *   La sesión del usuario persiste entre reinicios de la app.
            *   Las rutas protegidas no son accesibles sin iniciar sesión.
            *   El usuario puede cerrar sesión.

    **2.2. Visualización y Edición de Perfil de Usuario**
        *   **Descripción:** Permitir a los usuarios ver la información de su perfil. La edición será limitada en el MVP.
        *   **Adaptación Web:** Mostrar la información de perfil similar a la web.
        *   **Experiencia Móvil:** Pantalla de perfil clara y concisa para visualización.
        *   **Endpoints API Backend:**
            *   `GET /api/v1/auth/me` (para obtener datos del perfil)
            *   (La edición de perfil, si implica PUT a `/api/v1/auth/me` o similar, se considerará post-MVP para simplificar).
        *   **Criterios de Aceptación:**
            *   Usuario puede ver su nombre, email, y otra información relevante del perfil tal como la provea el endpoint `/auth/me`.

    **2.3. Gestión de Metas (Goals)**
        *   **Descripción:** Funcionalidad completa para crear, visualizar, editar y eliminar metas y sus pasos asociados.
        *   **Adaptación Web:** Replicar la funcionalidad principal de gestión de metas de la web, adaptando la UI/UX para móvil.
        *   **Experiencia Móvil:** Listado claro de metas. Formularios intuitivos para creación/edición. Navegación fluida entre metas y sus pasos.
        *   **Endpoints API Backend (`/api/v1/Metas`):**
            *   `GET /`: Listar metas.
            *   `POST /`: Crear meta.
            *   `GET /{goal_id}`: Ver detalle de meta.
            *   `PUT /{goal_id}`: Actualizar meta.
            *   `DELETE /{goal_id}`: Eliminar meta.
            *   `GET /{goal_id}/steps`: Listar pasos de meta.
            *   `POST /{goal_id}/steps`: Crear paso de meta.
            *   `PUT /{goal_id}/steps/{step_id}`: Actualizar paso de meta.
            *   `DELETE /{goal_id}/steps/{step_id}`: Eliminar paso de meta.
        *   **Criterios de Aceptación:**
            *   Usuario puede crear una nueva meta con título, descripción, etc.
            *   Usuario puede ver una lista de sus metas.
            *   Usuario puede ver los detalles de una meta específica.
            *   Usuario puede actualizar una meta existente.
            *   Usuario puede eliminar una meta.
            *   Usuario puede añadir, ver, actualizar y eliminar pasos dentro de una meta.

    **2.4. Gestión de Hábitos (Habits)**
        *   **Descripción:** Funcionalidad para crear, visualizar, editar, eliminar hábitos, registrar su cumplimiento (logs) y ver analíticas básicas.
        *   **Adaptación Web:** Replicar la funcionalidad de gestión de hábitos y seguimiento, adaptando UI/UX.
        *   **Experiencia Móvil:** Listado de hábitos con progreso visible. Facilidad para marcar un hábito como completado. Formularios simples para creación/edición. Visualización de rachas.
        *   **Endpoints API Backend (`/api/v1/habits`):**
            *   `GET /`: Listar hábitos.
            *   `POST /`: Crear hábito.
            *   `GET /{habit_id}`: Ver detalle de hábito.
            *   `PUT /{habit_id}`: Actualizar hábito.
            *   `DELETE /{habit_id}`: Eliminar hábito.
            *   `POST /{habit_id}/logs`: Registrar log de hábito (check-in).
            *   `GET /{habit_id}/logs`: Ver logs de un hábito.
            *   `GET /analytics`: Obtener datos de analíticas de hábitos (para rachas, etc.).
        *   **Criterios de Aceptación:**
            *   Usuario puede crear un nuevo hábito (título, frecuencia, etc.).
            *   Usuario puede ver una lista de sus hábitos.
            *   Usuario puede marcar un hábito como completado para el día actual.
            *   Usuario puede ver su racha actual y la mejor racha para un hábito.
            *   Usuario puede actualizar y eliminar hábitos.

    **2.5. Gestión de Tareas (Tasks)**
        *   **Descripción:** Funcionalidad para crear, visualizar, editar y eliminar tareas.
        *   **Adaptación Web:** Replicar la funcionalidad de gestión de tareas, adaptando UI/UX.
        *   **Experiencia Móvil:** Listado de tareas, posiblemente agrupadas por estado. Formularios simples.
        *   **Endpoints API Backend (`/api/v1/tasks`):**
            *   `GET /`: Listar tareas (con filtro por estado).
            *   `POST /`: Crear tarea.
            *   `GET /{task_id}`: Ver detalle de tarea.
            *   `PUT /{task_id}`: Actualizar tarea (incluyendo estado).
            *   `DELETE /{task_id}`: Eliminar tarea (soft delete).
        *   **Criterios de Aceptación:**
            *   Usuario puede crear una nueva tarea (título, descripción, prioridad, fecha de vencimiento opcional).
            *   Usuario puede ver una lista de sus tareas, filtrables por estado.
            *   Usuario puede marcar una tarea como completada.
            *   Usuario puede actualizar y eliminar tareas.

    **2.6. Visualización de Calendario**
        *   **Descripción:** Mostrar eventos del usuario en una vista de calendario. Inicialmente, estos eventos serán tareas con fecha de vencimiento.
        *   **Adaptación Web:** Presentar una vista de calendario similar a la web, pero optimizada para móvil.
        *   **Experiencia Móvil:** Vista de calendario mensual/semanal. Marcar días con tareas. Tocar un día para ver las tareas de ese día.
        *   **Endpoints API Backend (`/api/v1/calendar` y `/api/v1/tasks`):**
            *   `GET /calendar/events`: Para obtener eventos específicos del calendario (si se usa la entidad de calendario del backend).
            *   Alternativamente, se usarán los datos de `GET /tasks` y se filtrarán/mostrarán en el calendario del frontend si tienen `due_date`.
        *   **Criterios de Aceptación:**
            *   Usuario puede ver un calendario.
            *   Las tareas con fecha de vencimiento aparecen en el calendario.
            *   Usuario puede tocar un día para ver un resumen de las tareas de ese día.

## 3. Funcionalidades Fuera del Alcance del MVP
    *   Gestión detallada de Finanzas (CRUD de transacciones, metas financieras).
    *   Asistente AI / Chat AI.
    *   Workout Recommendations (generación IA).
    *   Analíticas / Insights Avanzados y consolidados (más allá de las analíticas básicas de hábitos).
    *   Sincronización completa y bidireccional con Google Calendar (la creación de eventos de calendario vía API es post-MVP).
    *   Notificaciones Push (se implementarán en una fase posterior según el plan).
    *   Suscripciones y Pagos In-App.
    *   Dashboard Principal Móvil complejo (se prioriza un layout simple con acceso a los módulos del MVP).
    *   Configuraciones avanzadas de la app (más allá de ver perfil y cerrar sesión).
    *   Edición avanzada de perfil de usuario.

--- 