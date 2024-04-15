let state = {
  tasks: [], //total tasks.
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
  //renderAllTasks(state.tasks);
  updateUnCompletedTaskCount();
}

function updateUnCompletedTaskCount() {

  document.getElementById("tasks-left").textContent = `${state.totalUnTasks} ${
    state.totalUnTasks >= 1 ? "Tasks" : "Task"
  } Left.`;
}

function incCompTasksCount() {
  state.totalComTasks += 1;
  updateUnCompletedTaskCount();
}
function decCompTasksCount() {
  state.totalComTasks =
    state.totalComTasks - 1 <= 0 ? 0 : state.totalComTasks - 1;
  updateUnCompletedTaskCount();
}
function decUncompTasksCount() {
  state.totalUnTasks = state.totalUnTasks - 1 <= 0 ? 0 : state.totalUnTasks - 1;
  updateUnCompletedTaskCount();
}
function incUncompTasksCount() {
  state.totalUnTasks += 1;
  updateUnCompletedTaskCount();
}

export {
  addTaskToTaskList,
  incCompTasksCount,
  decCompTasksCount,
  incUncompTasksCount,
  decUncompTasksCount,
};
