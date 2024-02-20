import { addTaskToTaskList } from "../state.js";

function addTaskBtnHandler(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  //
  let taskInput = document.getElementById("task-name");
  let taskName = document.getElementById("task-name").value.trim();
  if (taskName === "") {
    return window.alert("Please enter a taskName");
  }
  //set input to ""
  taskInput.value = "";
  //add task to taskList
  addTaskToTaskList(taskName);
}

export { addTaskBtnHandler };
