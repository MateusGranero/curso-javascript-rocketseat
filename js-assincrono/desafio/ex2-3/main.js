var inputElement = document.querySelector('input');
var btnElement = document.querySelector('button');
var listElement = document.querySelector('ul');

function buscaRepos() {
  setLoading();
  var user = inputElement.value;

  axios
    .get('https://api.github.com/users/' + user + '/repos')
    .then(function(result) {
      renderList(result.data);
    })
    .catch(function(error) {
      alert('Usuário não encontrado!');
    });
}

function renderList(repos) {
  listElement.innerHTML = '';

  for (repo of repos) {
    var listItem = document.createElement('li');
    var repo = document.createTextNode(repo.name);

    listItem.appendChild(repo);
    listElement.appendChild(listItem);
  }
}

function setLoading() {
  listElement.innerHTML = '';

  var listItem = document.createElement('li');
  var loadingText = document.createTextNode('Carregando...');

  listElement.appendChild(loadingText);
  listElement.appendChild(listItem);
}

btnElement.onclick = buscaRepos;
