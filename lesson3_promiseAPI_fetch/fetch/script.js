document.getElementById('get-data').addEventListener('click', async () => {
  fetch('https://jsonplaceholder.typicode.com/todos/4').
    then((data) => {
      return data.json()
    }).then(data2 => {
      console.log(data2)
    })


  //  smth.json() to convert from response to object

});
