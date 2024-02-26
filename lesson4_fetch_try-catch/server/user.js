fetch('http://localhost:3000/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //console.log(response);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
