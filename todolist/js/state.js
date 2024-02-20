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
  console.log(state);
  //TODO:: update tasklist ui
  renderAllTasks(state.tasks);
}

export { addTaskToTaskList };
