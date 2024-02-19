function fetchUserData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
            reject(userData.name) //it will be error
        }, 2000); 

    });
}

fetchUserData()
.then((data) =>{
 console.log(data)
})
.catch((err)=>{
    console.log("we cought " + err)
    throw new Error
})
.then(data =>{
    console.log("works" + data)
})
.catch((err)=>{
    console.log("we cought second" + err)
})