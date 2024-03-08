import { renderAllTasks } from "./module/tasksList.js";

let state = {
  tasks: [], //total tasks.
  unComletedTasks: [], //list of uncompleted tasks
  completedTasks: [], //list of completed tasks.

  totalTask: 0, // no of total tasks.
  totalUnTasks: 0, //no of uncompleted tasks
  totalComTasks: 0, //no of completed tasks.
};

function addTaskToTaskList(task) {
  state.tasks.push(task);
  //update total uncomplted tasks.
  state.totalUnTasks += 1;
  state.totalTask += 1;
  //console.log(state);
  //TODO:: update tasklist ui
  renderAllTasks(state.tasks);
  updateUnCompletedTaskCount();
}

function updateUnCompletedTaskCount() {
  document.getElementById("tasks-left").textContent = `${state.totalUnTasks} ${
    state.totalUnTasks >= 1 ? "Tasks" : "Task"
  } Left.`;
}

export { addTaskToTaskList };