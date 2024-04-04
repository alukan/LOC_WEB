fetch('http://localhost:3000/password4')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(data => console.log(data.message))
    .catch(error => console.error('There has been a problem with your fetch operation:', error))
