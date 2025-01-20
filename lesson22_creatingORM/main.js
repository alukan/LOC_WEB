// ORM needs to:
// 1. Read data from the database
// 2. Write/Save data to the database
// 3. Update data in the database
// 4. Delete data from the database
const Users = require("./orm.js");

(async () => {
  // Users.create("Text", "Test@gmail.com", "password123", 23);
  // let user1;
  // user1 = await Users.read({ id: 3 });
  // console.log(user1);
  // user1.name = "GUY";
  // await user1.save();
  // console.log(await Users.read({ id: 3 }));
  // user1.remove();
  // await user1.save();

  let user2 = new Users(1, "Tamlin", 30, "Tamlin@gmail.com", "passcode123");
  await user2.save();

  // .then((data) => {
  //   user1 = data;
  //   return user1;
  // });
  // Users.update(1, "Tamlin", 30, "Tamlin@gmail.com", "passcode123");

  // // Users.delete({ email: "Test@gmail.com" });

  // Users.read({ id: 1 });
})();
