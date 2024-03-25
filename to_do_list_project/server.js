const express = require("express");
const app = express();
const cors = require('cors');
const fs = require('fs'); //file system

app.use(express.json());
app.use(cors());

const PORT = 3000;//
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// if user uses /tasks, he will get all tasks
app.get("/tasks", (request, response) => {
  let tasks_from_file = [];
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send('Error reading from file.');
    }
    // data is string
    console.log(data)
    tasks_from_file = data.split('\n')
    console.log(tasks_from_file);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ tasks: tasks_from_file }));
  });

});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); // C:\Users\..\project
  //C:\Users\..\project\server.js
});

app.post("/addTask", (request, response) => {
  console.log(request.body);
  const newTask = request.body.task;
  if (newTask) {
    
    fs.appendFile('data.txt', '\n' + newTask, err => { // append to file, to replace the text use writeFile
      if (err) {
        console.error(err);
        return res.send('Error writing to file.');
      }
      // res.send('Successfully wrote to file.');
      response.writeHead(200, { "Content-Type": "applicaation/json" });
      response.end(JSON.stringify({ message: "everything is ok" }));
    });

    // tasks.push(newTask);
  } else {
    response.writeHead(400);
    response.end();
  }
});

// app.get('/html', ((request, response) => {
//     response.sendFile(__dirname + '/index.html');
// }))
