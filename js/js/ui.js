
const list = document.querySelector("ul");

export const  render = (tasks) => {
    list.innerHTML = "";
           
    tasks.forEach(task => {
        const li = document.createElement("li");
        
        li.className = `task-item ${ task.completed ?'completed' : ''}`;
        li.dataset.id = task.id;

        const span = document.createElement("span");
        span.textContent = task.text;

        const actions = document.createElement("div");
        actions.className = "actions";

        const btnEdit = document.createElement("button");
        btnEdit.textContent = "Editar";
        btnEdit.className = "btn-edit";

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Borrar";
        btnDelete.className = "btn-delete";

        actions.appendChild(btnEdit);
        actions.appendChild(btnDelete);
        li.appendChild(span);
        li.appendChild(actions);
        list.appendChild(li);
    });
}