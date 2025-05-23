# Backlog Priorizado del MVP – SoulDream App Móvil

## Épica 1: Autenticación y Gestión de Usuario (Core)

*   **User Story 1.1 (Auth - Alta Prioridad):** Como nuevo usuario, quiero poder registrarme en la aplicación usando mi cuenta de Google para acceder rápidamente.
    *   *Tareas:* Implementar flujo OAuth con Google, manejar callbacks, crear perfil en backend, almacenar token seguro.
*   **User Story 1.2 (Auth - Alta Prioridad):** Como usuario existente, quiero poder iniciar sesión en la aplicación usando mi cuenta de Google para acceder a mis datos.
    *   *Tareas:* Implementar flujo OAuth con Google, manejar callbacks, validar usuario, almacenar token seguro.
*   **User Story 1.3 (Auth - Alta Prioridad):** Como usuario autenticado, quiero que mi sesión persista para no tener que iniciar sesión cada vez que abro la aplicación.
    *   *Tareas:* Implementar carga de token al inicio, validación de token, refresco de token si es necesario.
*   **User Story 1.4 (Auth - Alta Prioridad):** Como usuario autenticado, quiero poder cerrar mi sesión de forma segura.
    *   *Tareas:* Botón de cerrar sesión, limpiar token almacenado, redirigir a pantalla de login.
*   **User Story 1.5 (Perfil - Media Prioridad):** Como usuario autenticado, quiero poder ver la información de mi perfil (nombre, email) para confirmar mi identidad.
    *   *Tareas:* Pantalla de perfil, consumir endpoint `/auth/me`.

## Épica 2: Gestión de Metas (Core)

*   **User Story 2.1 (Metas - Alta Prioridad):** Como usuario, quiero poder crear una nueva meta personal (con título, descripción) para definir mis objetivos.
    *   *Tareas:* Formulario de creación de meta, UI, lógica de estado, llamada a API `POST /Metas/`.
*   **User Story 2.2 (Metas - Alta Prioridad):** Como usuario, quiero poder ver una lista de todas mis metas para tener una visión general de mis objetivos.
    *   *Tareas:* Pantalla de listado de metas, UI, lógica de estado, llamada a API `GET /Metas/`.
*   **User Story 2.3 (Metas - Alta Prioridad):** Como usuario, quiero poder ver los detalles de una meta específica para revisar su información completa.
    *   *Tareas:* Pantalla de detalle de meta, UI, lógica de estado, llamada a API `GET /Metas/{goal_id}`.
*   **User Story 2.4 (Metas - Alta Prioridad):** Como usuario, quiero poder actualizar una meta existente para modificar su información si es necesario.
    *   *Tareas:* Formulario de edición de meta, UI, lógica de estado, llamada a API `PUT /Metas/{goal_id}`.
*   **User Story 2.5 (Metas - Media Prioridad):** Como usuario, quiero poder eliminar una meta que ya no es relevante.
    *   *Tareas:* Confirmación de eliminación, UI, lógica de estado, llamada a API `DELETE /Metas/{goal_id}`.
*   **User Story 2.6 (Pasos de Meta - Alta Prioridad):** Como usuario, quiero poder añadir pasos (sub-tareas) a una meta para desglosarla en acciones más pequeñas.
    *   *Tareas:* UI para añadir pasos en detalle de meta, formulario, lógica, API `POST /Metas/{goal_id}/steps`.
*   **User Story 2.7 (Pasos de Meta - Alta Prioridad):** Como usuario, quiero poder ver los pasos asociados a una meta.
    *   *Tareas:* UI para listar pasos en detalle de meta, API `GET /Metas/{goal_id}/steps`.
*   **User Story 2.8 (Pasos de Meta - Media Prioridad):** Como usuario, quiero poder actualizar un paso de una meta.
    *   *Tareas:* UI para editar paso, formulario, lógica, API `PUT /Metas/{goal_id}/steps/{step_id}`.
*   **User Story 2.9 (Pasos de Meta - Media Prioridad):** Como usuario, quiero poder eliminar un paso de una meta.
    *   *Tareas:* UI para eliminar paso, confirmación, lógica, API `DELETE /Metas/{goal_id}/steps/{step_id}`.

## Épica 3: Gestión de Hábitos (Core)

*   **User Story 3.1 (Hábitos - Alta Prioridad):** Como usuario, quiero poder crear un nuevo hábito (con título, frecuencia) para establecer rutinas positivas.
    *   *Tareas:* Formulario de creación de hábito, UI, lógica, API `POST /habits/`.
*   **User Story 3.2 (Hábitos - Alta Prioridad):** Como usuario, quiero poder ver una lista de mis hábitos para seguir mi progreso.
    *   *Tareas:* Pantalla de listado de hábitos, UI, lógica, API `GET /habits/`.
*   **User Story 3.3 (Hábitos - Alta Prioridad):** Como usuario, quiero poder marcar un hábito como completado para el día actual para registrar mi cumplimiento.
    *   *Tareas:* UI para check-in de hábito, lógica, API `POST /habits/{habit_id}/logs`.
*   **User Story 3.4 (Hábitos - Media Prioridad):** Como usuario, quiero poder ver mi racha actual y mi mejor racha para un hábito para motivarme.
    *   *Tareas:* UI en listado/detalle de hábito, consumir datos de API `GET /habits/` o `GET /habits/analytics`.
*   **User Story 3.5 (Hábitos - Media Prioridad):** Como usuario, quiero poder actualizar un hábito existente.
    *   *Tareas:* Formulario de edición, UI, lógica, API `PUT /habits/{habit_id}`.
*   **User Story 3.6 (Hábitos - Media Prioridad):** Como usuario, quiero poder eliminar un hábito que ya no sigo.
    *   *Tareas:* Confirmación, UI, lógica, API `DELETE /habits/{habit_id}`.

## Épica 4: Gestión de Tareas (Core)

*   **User Story 4.1 (Tareas - Alta Prioridad):** Como usuario, quiero poder crear una nueva tarea (con título, descripción, prioridad, fecha opcional) para organizar mis pendientes.
    *   *Tareas:* Formulario de creación, UI, lógica, API `POST /tasks/`.
*   **User Story 4.2 (Tareas - Alta Prioridad):** Como usuario, quiero poder ver una lista de mis tareas, idealmente filtrables por estado (pendiente, completada), para saber qué tengo que hacer.
    *   *Tareas:* Pantalla de listado, UI, lógica, API `GET /tasks/`.
*   **User Story 4.3 (Tareas - Alta Prioridad):** Como usuario, quiero poder marcar una tarea como completada.
    *   *Tareas:* UI para cambiar estado, lógica, API `PUT /tasks/{task_id}` (actualizando estado).
*   **User Story 4.4 (Tareas - Media Prioridad):** Como usuario, quiero poder actualizar los detalles de una tarea existente.
    *   *Tareas:* Formulario de edición, UI, lógica, API `PUT /tasks/{task_id}`.
*   **User Story 4.5 (Tareas - Media Prioridad):** Como usuario, quiero poder eliminar una tarea que ya no necesito.
    *   *Tareas:* Confirmación, UI, lógica, API `DELETE /tasks/{task_id}`.

## Épica 5: Visualización de Calendario (Core)

*   **User Story 5.1 (Calendario - Media Prioridad):** Como usuario, quiero poder ver un calendario mensual donde se indiquen los días que tienen tareas con fecha de vencimiento.
    *   *Tareas:* UI de calendario, lógica para obtener tareas (`GET /tasks/`) y marcarlas en el calendario.
*   **User Story 5.2 (Calendario - Media Prioridad):** Como usuario, al seleccionar un día en el calendario, quiero ver un resumen o lista de las tareas asignadas a ese día.
    *   *Tareas:* UI para mostrar tareas del día seleccionado.

## Backlog General (Layout, Navegación - Tareas Transversales)

*   **Tarea Transversal (Alta Prioridad):** Configurar la navegación principal de la aplicación (ej. TabNavigator para las épicas, StackNavigators para flujos internos).
*   **Tarea Transversal (Alta Prioridad):** Definir y desarrollar un layout de pantalla base (ScreenWrapper con SafeAreaView, cabeceras personalizables si son necesarias para el MVP).
*   **Tarea Transversal (Media Prioridad):** Crear componentes de UI básicos reutilizables (botones, inputs, cards simples) que se necesiten para las funcionalidades del MVP.

--- 