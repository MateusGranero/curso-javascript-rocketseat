axios
  .get('https://api.github.com/users/MateusGranero')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.warn(error);
  });
