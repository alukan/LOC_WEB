const io = require("socket.io-client");

// Connect to the WebSocket server
const socket = io("http://localhost:3001");

// Handle connection event
socket.on("connect" , () => {
  console.log("Connected to the server");
});

socket.emit("message", "Hello, server!");
// Listen for the welcome message from the server
socket.on("message", (message) => {
  console.log("Received from server:", message);
});

// Handle disconnection event
socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});
