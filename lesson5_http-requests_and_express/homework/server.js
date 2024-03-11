const express = require('express');
const app = express();

let names = ['Nick', 'John', 'Jane', 'Mary', 'Tom'];
//             0       1        2       3      4
// name1 -> Nick, name2 -> John, name3 -> Jane, name4 -> Mary, name5 -> Tom
// app.get('/some_request', (req, res) => {}); 
app.get('/names:id', (request, response)=>{ //name0 -> names[0-1]
    const id = parseInt(request.params.id, 10);
    if (id <= 5 && id >= 1){
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify({message:names[id-1]}));
    }
    else{
        response.writeHead(404);
        response.end(JSON.stringify({message:"there is no name for this id"}))
    }
});


// /index1 -> index1.html, /index2 -> index2.html, /index3 -> index3.html
app.get('/index:id', ((request, response) => { 
    const id = parseInt(request.params.id, 10);
    console.log(id); //  http://localhost:3000/index1
    console.log('/index' + id + '.html') // index1.html
    response.sendFile(__dirname + '/index' + id + '.html');
}))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});