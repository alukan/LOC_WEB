function processOrder() {
    
    console.log("process starts")
    return new Promise((resolve, reject)=>{ //resolve -> answer is right, reject -> isn't
        setTimeout(()=>{
            let val = Math.random()
            console.log("inside func" + val)
            if (val >= 0.5){
                resolve(val)
            }
            else{
                reject("erorr")
            }
        }, 2000);
    });
}// add value to the sum -> print sum, use then 2 times


function processOrder2() {
    
    console.log("process starts")
    return new Promise((resolve, reject)=>{ //resolve -> answer is right, reject -> isn't
        setTimeout(()=>{
            let val = Math.random()
            console.log("inside func2 " + val)
            if (val <= 0.5){
                resolve(val)
            }
            else{
                reject("erorr")
            }
        }, 1000);
    });
}

// if processOrder and processOrder2 returns resolve -> console.log("NICE") else ->  console.log("not NICE")
Promise.all([
    processOrder(),
    processOrder2()
]).then(()=>{
    console.log("Nice")
})
.catch(()=>{
    console.log("not Nice")
})