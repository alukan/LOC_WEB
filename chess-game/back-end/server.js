const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
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
let rooms = {};

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

app.post("/create-room", (req, res) => {
  id = uuidv4();
  room_id = id;
  const room = new Room(id);
  rooms[id] = room;
  res.status(201).json({
    id: id,
  });
});

io.on("connection", (socket) => {
  console.log("connected");
  clients.push(socket);
  socket.emit("message", "Welcome, to my server");
  let room_id;

  // every time we recieve event "join"
  // same as joinFunction(), every time we recieve event "join" -> call function joinFunction(id)
  socket.on("join", (id) => {
    if (rooms[id] !== undefined) {
      rooms[id].saveClient(socket);
      room_id = id;
      socket.emit("board", rooms[room_id].board);
    }
  });
  // id is already lost, but room_id exists

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
    if (rooms[room_id]) {
      rooms[room_id].board = recieveBoard;

      rooms[room_id].clients.forEach((client) => {
        if (client !== socket) client.emit("move", recieveBoard);
      });
    }
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
