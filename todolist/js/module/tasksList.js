//add new task to UIALL TASK
import {
  decCompTasksCount,
  incCompTasksCount,
  decUncompTasksCount,
  incUncompTasksCount,
} from "../state.js";
function addNewTaskUI(taskName) {
  debugger;
  const tasksUL = document.getElementById("tasks-list");
  const taskLi = document.createElement("li");
  taskLi.innerHTML = `
              <span class="icon task-icon">
                      <input type="checkbox" id=${taskName} name="tcb" class="cb-com"/>
                      <label for=${taskName} class="task-item">${taskName}</label>
              </span>

            <span class="task-icon fa-solid fa-trash" id=${taskName + "d"}>
              
            </span>`;
  tasksUL.append(taskLi);
  document.getElementById(taskName).addEventListener("change", (evt) => {
    debugger;
    evt.preventDefault();
    let liEl = evt.target.parentElement.parentElement;
    if (liEl.classList.contains("task-completed")) {
      debugger;
      liEl.classList.remove("task-completed"); //make uncompleted
      //TODO:increase count of tasks left
      incUncompTasksCount();
      decCompTasksCount();
    } else {
      debugger;
      liEl.classList.add("task-completed");
      //TODO: decrease count of task left
      incCompTasksCount();
      decUncompTasksCount();
    }
  });
  let s = document.getElementById(taskName + "d");

  s.addEventListener("click", (evt) => {
    debugger;
    evt.preventDefault();
    evt.stopPropagation();
    // console.log("jhi");
    let liEl = evt.target.parentElement;
    if (liEl.classList.contains("task-completed")) {
      debugger;
      liEl.classList.remove("task-completed"); //make uncompleted
      //TODO:increase count of tasks left
      decCompTasksCount();
    } else {
      debugger;
      decUncompTasksCount();
    }
    liEl.remove();
  });
}

export { addNewTaskUI };
