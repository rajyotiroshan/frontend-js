function renderAllTasks(tasks = []) {
  //get
  const tasksUL = document.getElementById("tasks-list");
  let totalLiItem = "";
  tasks.forEach((taskName) => {
    totalLiItem = `${totalLiItem} 
                 <li>
                    <span class="icon task-icon">
                      <input type="checkbox" id="task-cb" name="tcb" />
                      <span class="task-item">${taskName}</span>
                    </span>
                    
                    <span class="task-icon">
                    <i class="fa-solid fa-trash"></i>
                    </span>
                </li>`;
  });
  tasksUL.innerHTML = totalLiItem;

  //Add click listener to remove btn, check btn
}

//add new task to UIALL TASK

function addNewTaskUI(taskName) {
  const tasksUL = document.getElementById("tasks-list");
  const taskLi = document.createElement("li");
}

export { renderAllTasks };
