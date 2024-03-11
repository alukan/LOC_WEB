

passwords = ['abc', '12345q', 'hgrt'];   // "/password2"
//           0         1         2
const http = require('http');

const server = http.createServer((request, response) => {
    //logic
    if (request.url === "/password2" && request.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: passwords[1] }));
    }
    //else if()

    else if (request.url === "/password3" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: passwords[2] }));
    }

    else if (request.url === "/password1" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: passwords[0] }));
    }

    else {
        response.writeHead(404);
        response.end();
    }
    // "/password1"
    // "/password3"
}); // shift+alt+f to style the code

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// ctrl+C