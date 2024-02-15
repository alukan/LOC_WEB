function func_with_promise1() {

    return new Promise((resolve, reject)=>{ //resolve -> answer is right, reject -> isn't
        setTimeout(()=>{
            resolve(1)
        }, 2000);
    });
}

function func_with_promise2() {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2)
        }, 3000);
    });
}

function func_with_promise3() {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(3)
        }, 1000);
    });
}