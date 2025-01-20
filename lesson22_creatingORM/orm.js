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
  constructor(id, name, age, email, password) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  // Create new user if it doesn't exist
  // try - catch, if we got an error reading -> we need to create a new user
  async save() {
    try {
      await Users.read({ id: this.id });
      Users.update(this.id, this.name, this.age, this.email, this.password);
    } catch (err) {
      Users.create(this.name, this.age, this.email, this.password, this.id);
    }
  }

  remove() {
    Users.delete({ id: this.id, email: this.email });
  }

  static create(name, email, password, age, id = null) {
    const query = id
      ? "INSERT INTO Users (name, email, password, age, id) VALUES(?, ?, ?, ?, ?) "
      : "INSERT INTO Users (name, email, password, age) VALUES (?, ?, ?, ?)";
    const params = id
      ? [name, email, password, age, id]
      : [name, email, password, age];

    db.run(query, params, (err) => {
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
      return new Promise((res, rej) => {
        db.get(query, [id], (err, row) => {
          if (!row) {
            return rej("User not found");
          }
          if (err) {
            return rej(err);
          }
          const user = new Users(
            row.id,
            row.name,
            row.age,
            row.email,
            row.password
          );
          res(user);
        });
      });
    } else if (email) {
      const query = "SELECT * FROM Users WHERE email = ?";
      return new Promise((res, rej) => {
        db.get(query, [email], (err, row) => {
          if (err) {
            throw new Error(err);
          }
          const user = new Users(
            row.id,
            row.name,
            row.age,
            row.email,
            row.password
          );

          res(user);
        });
      });
    }
  }
  // UPDATE {table name} SET {column names} = {new value} WHERE {condition}
  static update(id, name, age, email, password) {
    if (!id) {
      throw new Error("You need to provide id");
    }
    if (id) {
      const query =
        "UPDATE Users SET name = ?, age = ?, email = ?, password=?  WHERE id = ?";

      db.run(query, [name, age, email, password, id], (err, row) => {
        if (err) {
          throw new Error(err);
        }
        console.log(row);
        return row;
      });
    }
  }

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
