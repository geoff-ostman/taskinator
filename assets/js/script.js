var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // List Item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // Hold Task Info & List Items
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // HTML Content for DIV
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // Add EntireList Items to List
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);