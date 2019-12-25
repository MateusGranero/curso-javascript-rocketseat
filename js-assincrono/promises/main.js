function minhaPromise() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/MateusGranerosdfsfs');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    };
  });
}

minhaPromise()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.warn(error);
  });
