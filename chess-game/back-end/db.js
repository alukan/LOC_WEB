const mongoose = require("mongoose");

async function connection(mongoUri) {
  try {
    await mongoose.connect(mongoUri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connection;
// function1
// function2 (starts after 1 is finished)

// asyncfunction1
// asyncfunction2 (starts after function1 is Started, asyncfunction1 can still work)

// await asyncfunction1
// asyncfunction2 (starts after asyncfunction1 is finished)

// async connection{
//    await mongoose.connect() (can happen after function2, but not after function3)
//    function3
//}
// function2
