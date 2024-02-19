function func_with_promise1() {

    return new Promise((resolve, reject)=>{ //resolve -> answer is right, reject -> isn't
        setTimeout(()=>{
            console.log(1)
            resolve(1)
        }, 2000);
    });
}

function func_with_promise2() {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(2)
            resolve(2)
        }, 3000);
    });
}

function func_with_promise3() {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("3")
            resolve(3)
        }, 1000); // line 
    });
}

function ALL(result) {

    return new Promise((resolve, reject)=>{
            resolve(result)
    });
}

Promise.all([
    func_with_promise1(),
    func_with_promise2(),
    func_with_promise3(),
    1,
    2
  ])
    .then(data => {
      console.log(data);
    })
    .catch((err) => {
      console.log("we caught" + err);
      return " we movr";
    });