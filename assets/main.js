const activityInput = document.querySelector("input");
const list = document.querySelector("#listado");
const btnAdd = document.querySelector("#btn-add");

const tasks = [];

btnAdd.addEventListener("click", () => {
  const activityName = activityInput.value;
  tasks.push(activityName);
  activityInput.value = "";

  let html = "";
  for (let task of tasks) {
    html += `<li><button style="color: red">X</button>  ${task} <input type="checkbox" /></li>`;
  }
  list.innerHTML = html;
});
