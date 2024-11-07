const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: String,
  board: Object,
});

//               say that it is mongoose model. in brakets we put name of the collection, Room
module.exports = mongoose.model("RoomData", roomSchema);
