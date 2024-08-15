const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
// func(request, response)

app.get("/", (req, res) => {
  res.status(200).send("Hi, its working, ");
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.emit("message", "Welcome, to my server");

  socket.on("message", (msg) => {
    console.log("Received message", msg);
  });

  socket.on("disconect", () => {
    console.log("A client disconnected");
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
