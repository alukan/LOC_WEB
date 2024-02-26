// fetch("https://jsonplaceholder.typicode.com/todos/4");
async function data(paramter) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${paramter}` // 4->paramter
        );

        if (!response.ok){
            throw new Error("my own error")
        }

        const data = await response.json();
        return (data);
    } catch (error) {
        console.error("error found:", error);
        throw error;
    }
}

Promise.race([
    data(1500)
]).then((data)=>{
    console.log("everything is ok", data);
})
.catch ((error)=>{
    console.log("error found:", error);
})
// ERROR -> Catch (fixed) -> ".then" can be called because we fixed an Error


parameter = 15;
data(parameter);
