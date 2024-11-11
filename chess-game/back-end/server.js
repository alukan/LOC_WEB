const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const connectionDB = require("./db");
const RoomData = require("./models/rooms");
require("dotenv").config();
// process.env.MONGO_URI

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

connectionDB(process.env.MONGO_URI).then(() => {
  RoomData.find({})
    .exec()
    .then((room_data) => {
      for (let i in room_data) {
        const room = new Room(room_data[i].roomId, room_data[i].board);
        rooms[room_data[i].roomId] = room;
      }
    });
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
  constructor(roomId, board = null) {
    this.roomId = roomId;
    this.board = board;
    this.clients = [];
    this.colors = ["black", "white"];
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

  saveToDB() {
    // fill with data from Room class
    const newRoom = new RoomData({
      board: this.board,
      roomId: this.roomId,
    });

    newRoom.save();
  }

  updateToDB() {
    // Update - Delete + Create
    try {
      RoomData.findOneAndUpdate(
        { roomId: this.roomId }, // condition
        { board: this.board }, // what to update
        { upsert: true } // options
      ).exec();
    } catch (err) {
      console.log(err);
    }
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
  rooms[id].saveToDB();
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
      rooms[room_id].updateToDB();

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
