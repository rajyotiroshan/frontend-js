//add new task to UIALL TASK

function addNewTaskUI(taskName) {
  const tasksUL = document.getElementById("tasks-list");
  const taskLi = document.createElement("li");
  taskLi.innerHTML = `<span class="icon task-icon">
  <input type="checkbox" id=${taskName} name="tcb" class="cb-com"/>
  <label for=${taskName} class="task-item">${taskName}</label>
</span>

<span class="task-icon" id=${taskName + "d"}>
<i class="fa-solid fa-trash"></i>
</span>`;
  tasksUL.append(taskLi);
  document.getElementById(taskName).addEventListener("change", (evt) => {
    evt.preventDefault();
    let liEl = evt.target.parentElement.parentElement;
    if (liEl.classList.contains("task-completed")) {
      liEl.classList.remove("task-completed");
    } else {
      liEl.classList.add("task-completed");
    }
  });
  let s = document.getElementById(taskName + "d");

  s.addEventListener("click", (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("jhi");
    let liEl = evt.target.parentElement.parentElement;

    liEl.remove();
  });
  liEl.classList.toggle("task-completed");
}

export { addNewTaskUI };
