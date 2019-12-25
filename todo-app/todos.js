var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = ['Fazer café', 'Estudar Javascript', 'Alguma outra coisa'];

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';

  renderTodos();
}

btnElement.onclick = addTodo;

renderTodos();
