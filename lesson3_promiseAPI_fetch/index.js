//Promise.all
//Promise.race

function func_with_promise1() {

    return new Promise((resolve, reject) => { //resolve -> answer is right, reject -> isn't
        setTimeout(() => {
            //console.log(1)
            resolve(1)
        }, 2000);
    });
}

function func_with_promise2() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log(2)
            reject(2)
        }, 3000);
    });
}

function func_with_promise3() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3")
            resolve(3)
        }, 4000); // line 
    });
}

//result of the fastest even if it has mistake
Promise.race([ //correct
    func_with_promise1(),
    func_with_promise2(),
    func_with_promise3()
])
    .then(() => { //console.log("It was ok") or console.log("It was with error")
        console.log("it was ok")
    })
    .catch(() => {
        console.log("it was with error")
    })
