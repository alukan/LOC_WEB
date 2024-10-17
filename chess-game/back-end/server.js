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
    origin: "*",
    methods: ["GET", "POST"],
  },
});

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
    this.colors = ["black", "white"];
    this.playerColors = {};
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
  let color;

  // every time we recieve event "join"
  // same as joinFunction(), every time we recieve event "join" -> call function joinFunction(id)
  socket.on("join", (data) => {
    if (rooms[data.id] !== undefined) {
      rooms[data.id].saveClient(socket);
      room_id = data.id;

      console.log("color: ", color);
      socket.emit("board", rooms[room_id].board);

      //starting value;    condition;                  what to do on each step, i++ is the same as i+=1
      for (let i = 0; i < rooms[data.id].colors.length; i++) {
        if (data.color == rooms[data.id].colors[i]) {
          color = data.color;
          rooms[data.id].colors = rooms[data.id].colors.filter(
            (element, index) => index !== i
          );
          break;
        }
      }

      socket.emit("color", color);
    }
  });

  socket.on("getColor", () => {
    console.log("Your color is:", color);
  });

  // id is already lost, but room_id exists

  socket.on("message", (msg) => {
    console.log("Received message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
    if (rooms[room_id] && color) {
      rooms[room_id].colors.push(color);
    }
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
