function fetchUserData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
            resolve(userData)
        }, 2000); 

    });
}

fetchUserData()
    .finally(() => {
        console.log("finally")
    })
    .then(data => { // 1
        console.log(data)
        return 2
    })
    .then(data2 => { // 2
        console.log(data2)
    })
    .catch(err => {
        console.log("we caught " + err)
        return "we move"
    })
    .then(data => { // 3
        console.log(data)
    })
