// PARA CREAR UNA TAREA
function createTask(title) {
    // CONSTRUYO LA TAREA A AÑADIR
    let task = document.createElement("div");
    let titulo = document.createElement("p");
    let close = document.createElement("p");

    let texto = document.createTextNode(title);
    let x = document.createTextNode("X");

    titulo.appendChild(texto);
    close.appendChild(x);

    // LE AÑADO EL LISTENER PARA CERRARLO
    close.addEventListener("click", deleteTask);

    task.classList.add("task");
    task.appendChild(titulo);
    task.appendChild(close);
    task.draggable = true;

    task.addEventListener("dragstart", event => {
        event.dataTransfer.setData("name", event.target.children[0].textContent);
        event.target.setAttribute("id", "draggable");
    });

    return task;
}

// FUNCION PARA BORRAR UNA TAREA
function deleteTask(event) {
    event.target.parentElement.remove();
}

// Capturador de eventos para añadir una nueva tarea
document.querySelector(".btn").addEventListener("click", event => {
    // Obtenemos el valor del input
    const taskName = document.querySelector("input").value;

    // Compruebo si tengo algo en el campo
    if (!taskName) {
        alert("no hay nada que añadir");
    } else {
        // AÑADO LA TAREA
        document.querySelector(".todo .tasks").appendChild(createTask(taskName));

        // Limpio el contenido del formulario
        document.querySelector("input").value = "";
    }
});

// Hago que todas las tareas sean Draggable y establezco los eventos necesarios
let tasks = document.querySelectorAll(".task");

tasks.forEach(element => {
    element.draggable = true;
    element.addEventListener("dragstart", event => {
        event.dataTransfer.setData("name", event.target.children[0].textContent);
        event.target.setAttribute("id", "draggable");
    });
});

// Eventos para manejar el "dragover" y "drop"
let tasks_list = document.querySelectorAll(".tasks");

tasks_list.forEach(lista => {
    lista.addEventListener("dragover", function (event) {
        event.preventDefault(); // Permitir el drop
    });

    lista.addEventListener("drop", function (event) {
        event.preventDefault();
        let name = event.dataTransfer.getData("name");
        event.target.closest(".tasks").appendChild(createTask(name));
        document.getElementById("draggable").remove();
    });
});
