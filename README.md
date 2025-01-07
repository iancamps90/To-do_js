# To-do List Draggable con JavaScript

Este es un proyecto simple de una lista de tareas (To-Do List) en la que puedes agregar, eliminar y arrastrar tareas entre diferentes estados utilizando JavaScript. Los usuarios pueden añadir tareas y moverlas entre tres contenedores: "TO DO", "IN PROCESS" y "DONE", todo ello utilizando la funcionalidad de "draggable" en HTML5.

## Estructura del Proyecto

1. **index.html**: El archivo principal que contiene la estructura de la aplicación.
2. **/css**: Carpeta que contiene los estilos CSS para el proyecto.
3. **/js**: Carpeta que contiene el archivo JavaScript con la lógica de la aplicación.

## Pasos para Crear el Proyecto

1. **Crear la estructura básica de la aplicación**:
   - Crear el archivo `index.html` con la estructura base.
   - Crear las carpetas `/css` y `/js` para organizar los estilos y el script.

2. **Agregar los contenedores**:
   - Crear el **container** para la adición de nuevas tareas.
   - Crear un **container** para las tareas en proceso.
   - Crear un **container** para las tareas realizadas.

3. **Diseño de HTML**:
   - El archivo HTML incluye tres áreas principales para las tareas: "TO DO", "IN PROCESS" y "DONE".
   - Cada tarea tiene un título y un botón de eliminación.

4. **Aplicar Estilos al HTML**:
   - Se agregan estilos básicos para mejorar la apariencia de la lista de tareas.
   - Se crean estilos específicos para cada estado de las tareas.

5. **Interactividad con JavaScript**:
   - Implementamos la lógica de JavaScript para interactuar con la página.
   - Añadimos la funcionalidad de arrastrar y soltar tareas utilizando la API `drag-and-drop`.

6. **Funcionalidad para Crear una Tarea**:
   - Creamos una función `createTask(title)` que construye una nueva tarea con un título y un botón de eliminación.

7. **Agregar Listener para Cerrar la Tarea**:
   - Añadimos un evento `click` al botón de eliminación de la tarea para poder borrarla.

8. **Capturador de Eventos para Añadir Nuevas Tareas**:
   - Implementamos un evento para capturar el click del botón de agregar tarea y crear nuevas tareas con el valor introducido en el input.

9. **Función para Borrar una Tarea**:
   - Definimos la función `deleteTask(event)` que elimina la tarea seleccionada del DOM.

10. **Hacer que las Tareas sean Draggables**:
    - Utilizamos la propiedad `draggable` de HTML5 y manejamos los eventos `dragstart`, `dragover`, y `drop` para permitir arrastrar las tareas entre diferentes contenedores.

11. **Establecer Eventos de Drag and Drop**:
    - Añadimos el comportamiento de las tareas cuando se arrastran y se sueltan en diferentes secciones de la lista.

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/to-do-draggable.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd to-do-draggable
    ```

3. Abre el archivo `index.html` en tu navegador para ver la aplicación en acción.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tus cambios: `git checkout -b feature-nueva-funcionalidad`.
3. Realiza tus cambios y haz commit de ellos: `git commit -am 'Añadir nueva funcionalidad'`.
4. Sube tus cambios a tu repositorio: `git push origin feature-nueva-funcionalidad`.
5. Crea un Pull Request para que tus cambios sean revisados e integrados.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
