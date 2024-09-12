const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // to allow everything origin: "*",
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let board;
let clients = [];

/* class MyClass {
  constructor() { ... } -> __init__
  method1() { ... }
  method2() { ... }
  method3() { ... }
  to access variable, this.name
  ...
}*/

class Room {
  constructor(roomId) {
    this.roomId = roomId;
    this.board = null;
    this.clients = [];
  }

  saveBoard(board) {
    this.board = board;
  }

  saveClient(client) {
    this.clients.push(client);
  }

  move() {
    this.clients.forEach((client) => {
      client.emit("move", this.board);
    });
  }
}

// func(request, response)
app.get("/", (req, res) => {
  res.status(200).send("Hi, its working, ");
});

io.on("connection", (socket) => {
  console.log("connected");
  clients.push(socket);
  socket.emit("message", "Welcome, to my server");
  socket.emit("board", board);

  socket.on("message", (msg) => {
    console.log("Received message", msg);
  });

  socket.on("disconect", () => {
    console.log("A client disconnected");
  });

  socket.on("move", (recieveBoard) => {
    // for (let i = 0; i<clients.length();i++){
    //   client = clients[i]
    // }
    board = recieveBoard;
    clients.forEach((client) => {
      if (client !== socket) client.emit("move", recieveBoard);
    });
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
