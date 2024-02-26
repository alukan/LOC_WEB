passwords = ['abc', '12345q', 'hgrt'];   // "/password2"
//           0         1         2
const http = require('http');

const server = http.createServer((request, response) => {
    //logic
    if (request.url === "/password2" && request.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( {message: passwords[1] } ));
    }
    //else if()
    else {
        response.writeHead(404);
        res.end();
    }
    // "/password1"
    // "/password3"
}); // shift+alt+f

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});