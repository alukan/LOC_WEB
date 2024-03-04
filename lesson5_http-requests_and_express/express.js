const express = require('express');
const app = express();

let passwords = ['abc', '12345q', 'hgrt'];
//                 0       1        2       3
app.get('/password:id', ((request, response) => { // request = /password:id, request.params = all things like :id
    const id = parseInt(request.params.id, 10);
    if (id <= 3) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: passwords[id - 1] }));// id == 1 : passwords[0]
    }
    else {
        
        response.writeHead(404);// there is no password for this id
        response.end(JSON.stringify({message: "there is no password for this id"}));
    }

})) // for /password1-3
// update this: /check : server is OK
app.get('/check', ((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "server is ok" }));
}))

app.get('/html', ((request, response) => {
    response.sendFile(__dirname + '/index.html');
}))

app.get('*', (request, response) => { //will be called for every request, that we haven't defined in app.get
    response.writeHead(404);
    response.end();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});