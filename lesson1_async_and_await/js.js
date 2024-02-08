async function func(){
    let promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {resolve("2")}, 1000)
    })
    console.log("3")
    let ans = await promise
    
    console.log(ans)
    console.log("1")
     //cut and paste it in other string
    //ans("123") //make it 3 2 1
}

func()

// 3
// 2
// 1