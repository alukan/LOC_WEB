const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const tasks = ["task from server1", "task from server2", "task from server3"];

// if user uses /tasks, he will get all tasks
app.get("/tasks", (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ tasks: tasks }));
});

app.get('/', (request, response) =>{
response.sendFile(__dirname+'/index.html') // C:\Users\..\project
//C:\Users\..\project\server.js
})

// app.get('/html', ((request, response) => {
//     response.sendFile(__dirname + '/index.html');
// }))