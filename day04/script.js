function callApi() {
  fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => {
      document.getElementById('output').textContent = data;
    })
    .catch(err => {
      document.getElementById('output').textContent = 'Error calling API';
      console.error(err);
    });
}
