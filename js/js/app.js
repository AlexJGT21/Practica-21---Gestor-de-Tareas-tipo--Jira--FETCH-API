
import * as state from './state.js';
import * as ui from './ui.js';


document.addEventListener("DOMContentLoaded", async () => {
    /*Agregar una tarea*/
    const input = document.getElementById("taskInput");
    const addBtn = document.querySelector(".btn-add");
    const list = document.getElementById("taskList");

    const task = await state.fetchTask();

    ui.render(task);

    addBtn.addEventListener("click", async () => {
        if(input.value.trim() === "") {
            return;
        }
        await state.addTask(input.value.trim());
        input.value = "";
        ui.render(state.tasks);
    });

    list.addEventListener("click", (event) => {
        const target = event.target;
        const li = target.closest("li");
        if (!li) return;
        
        if (target.classList.contains("btn-delete")) {
            li.parentNode.removeChild(li);
            return;
        }
        
        if (target.classList.contains("btn-edit")) {
            const span = li.querySelector("span");
            const nuevoTexto = prompt("Editar tarea:", span.textContent);
            if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            span.textContent = nuevoTexto.trim();
        }
        return;
    }
    li.classList.toggle("completed");
    });
    
});

