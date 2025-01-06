// ORM needs to:
// 1. Read data from the database
// 2. Write/Save data to the database
// 3. Update data in the database
// 4. Delete data from the database
const Users = require("./orm.js");

Users.create("Text", "Test@gmail.com", "password123", 23);

Users.read({ id: 1 });

Users.delete({ email: "Test@gmail.com" });

Users.read({ id: 1 });
