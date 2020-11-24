document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById('create-task-form');

  input.addEventListener('submit', function(event) {
    event.preventDefault();

    let taskElement=document.getElementById("new-task-description");
    let newTask = taskElement.value;
    // console.log(newTask);

    let newItem = document.createElement('li');
    newItem.innerText = newTask;

    let list=document.getElementById("tasks");
    list.appendChild(newItem);
    taskElement.value = '';
  }
);

});
