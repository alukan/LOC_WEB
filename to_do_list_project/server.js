const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs"); //file system
const sqlite3 = require("sqlite3");

const dbName = "tasks.db"; // name of the database file

app.use(express.json());
app.use(cors());

const PORT = 3000; //
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// console.log(__dirname);

// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//     return;
//   }
//   console.log("Files and directories in the directory:", files);
// });

// Use to see all files in current directory

let db = new sqlite3.Database(dbName, (err) => {
  // callback -> function that is executed when the database is ready
  if (err) {
    console.error(err);
  } else {
    // Send SQL
    db.run(
      //Method What    Checker    Name   1 field
      "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT)",
      (err) => {
        if (err) {
          console.error("Error creating table", err.message);
        } else {
          console.log("Table created or already exists");
        }
      }
    );
  }
});
// if user uses /tasks, he will get all tasks
app.get("/tasks", (request, response) => {
  let tasks_from_file = [];
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return response.send("Error reading from file.");
    }
    // data is string
    tasks_from_file = data.split("\n");
    console.log(tasks_from_file);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ tasks: tasks_from_file }));
  });
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); // C:\Users\..\project
  //C:\Users\..\project\server.js
});

app.post("/addTaskDB", (request, response) => {
  console.log(request.body);
  const newTask = request.body.task;
  if (newTask) {
    db.run(
      // Method  What Where What-field
      `INSERT INTO tasks (task) VALUES (?)`,
      [newTask],
      (err) => {}
    );
    // tasks.push(newTask);
  } else {
    response.writeHead(400);
    response.end();
  }
});

app.post("/addTask", (request, response) => {
  console.log(request.body);
  const newTask = request.body.task;
  if (newTask) {
    fs.appendFile("data.txt", "\n" + newTask, (err) => {
      // append to file, to replace the text use writeFile
      if (err) {
        console.error(err);
        return res.send("Error writing to file.");
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

app.delete("/deleteTask/:task", (request, response) => {
  console.log("it works: 1");
  const task = request.params.task; // Not a Number

  fs.readFile("data.txt", "utf8", (err, data) => {
    console.log("it works:2");
    if (err) {
      console.error(err);
      return response.status(500).json({ message: "There was an Error" });
    }
    const lines = data.split("\n"); //array, line -> lines[i]
    console.log(task); // check
    const index = lines.findIndex((line) => line === task); // can't find == -1

    if (index !== -1) {
      lines.splice(index, 1);
      console.log("it works: 3");

      fs.writeFile("data.txt", lines.join("\n"), (err) => {
        if (err) {
          console.error(err);
          return response.status(500).json({ message: "There was an Error" });
        }
        response.status(200).json({ message: "Task is deleted" });
      });
    } else {
      response.status(404).json({ message: "Task does not exist" });
    }
  });
});
// app.get('/html', ((request, response) => {
//     response.sendFile(__dirname + '/index.html');
// }))
