const taskContainer = document.querySelectorAll(".task-container");
const tasks = document.querySelectorAll(".task");

let taskDragged;

tasks.forEach((tasks) => tasks.addEventListener("dragstart", dragStart));

taskContainer.forEach((taskContainer) => {
  taskContainer.addEventListener("dragover", dragOver);
  taskContainer.addEventListener("drop", dragDrop);
});

function dragStart(e) {
  console.log(e.target);
  taskDragged = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  console.log(e.target);
  e.target.append( taskDragged);
}
