const todoInput = document.getElementById('todoInput');
const todoLists = document.getElementById('todoLists');

todoInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});

const addTodo = (todoText) => {
  const listItem = document.createElement("li");
  listItem.textContent = todoText;

  // Optional: Add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => listItem.remove();

  listItem.appendChild(deleteBtn);
  todoLists.appendChild(listItem);
};