const express = require("express");
const app = express();


app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

let tasks = ["task from server1", "task from server2", "task from server3"];

// if user uses /tasks, he will get all tasks
app.get("/tasks", (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ tasks: tasks }));
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); // C:\Users\..\project
  //C:\Users\..\project\server.js
});

app.post("/addTask", (request, response) => {
  console.log(request.body);
  const newTask = request.body.task;
  if (newTask) {
    tasks.push(newTask);
    response.writeHead(200, { "Content-Type": "applicaation/json" });
    response.end(JSON.stringify({ message: "everything is ok" }));
  } else {
    response.writeHead(400);
    response.end();
  }
});

// app.get('/html', ((request, response) => {
//     response.sendFile(__dirname + '/index.html');
// }))
