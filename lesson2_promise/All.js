function asyncFunction(id, delay) {
    return new Promise((resolve, reject) => {
        if(id == 1){
            reject("we don't want 1")
        }
        setTimeout(() => {
            console.log("hey from " + id)
            resolve(id + " finished")
        }, delay);
    })
}

Promise.all([
    asyncFunction(1, 2000),
    asyncFunction(2, 3000),
    asyncFunction(3, 1000)
]).then(() => {
    console.log("all finished")
}).catch((data)=>{
    console.log(data)
})