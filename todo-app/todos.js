var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = ['Fazer café', 'Estudar Javascript', 'Alguma outra coisa'];

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    var pos = todos.indexOf(todo);

    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    linkElement.setAttribute('href', '#');
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
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

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}

renderTodos();
