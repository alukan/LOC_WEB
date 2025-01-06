const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    throw new Error(err);
  } else {
    // Create table Users with:
    // id as INTEGER PRIMARY KEY
    // name as TEXT
    // email as TEXT
    // password as TEXT
    // age as INTEGER
    db.run(
      "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE, password TEXT, age INTEGER)",
      (err) => {
        if (err) {
          throw new Error(err);
        }
      }
    );
  }
});

class Users {
  static create(name, email, password, age) {
    const query =
      "INSERT INTO Users (name, email, password, age) VALUES (?, ?, ?, ?)";
    db.run(query, [name, email, password, age], (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }

  static read({ id, email }) {
    if (id === undefined && email === undefined) {
      throw new Error("You need to provide id or email");
    }
    if (id) {
      const query = "SELECT * FROM Users WHERE id = ?";
      db.get(query, [id], (err, row) => {
        if (err) {
          throw new Error(err);
        }
        console.log(row);
        return row;
      });
    } else if (email) {
      const query = "SELECT * FROM Users WHERE email = ?";
      db.get(query, [email], (err, row) => {
        if (err) {
          throw new Error(err);
        }
        console.log(row);
        return row;
      });
    }
  }

  // UPDATE {table name} SET {column names} = {new value} WHERE {condition}
  static update() {}

  static delete({ id, email }) {
    if (!id && !email) {
      throw new Error(" You need to provide id or email");
    }
    if (id) {
      const query = "DELETE FROM Users WHERE id = ?";
      db.run(query, [id], (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    } else if (email) {
      const query = "DELETE FROM Users WHERE email = ?";
      db.run(query, [email], (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    }
  }
}

module.exports = Users;
