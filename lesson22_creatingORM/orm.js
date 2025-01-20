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
      await Users.update(
        this.id,
        this.name,
        this.age,
        this.email,
        this.password
      );
    } catch (err) {
      await Users.create(
        this.name,
        this.age,
        this.email,
        this.password,
        this.id
      );
    }
  }

  async remove() {
    await Users.delete({ id: this.id, email: this.email });
  }

  static async create(name, email, password, age, id = null) {
    const query = id
      ? "INSERT INTO Users (name, email, password, age, id) VALUES(?, ?, ?, ?, ?) "
      : "INSERT INTO Users (name, email, password, age) VALUES (?, ?, ?, ?)";
    const params = id
      ? [name, email, password, age, id]
      : [name, email, password, age];

    return new Promise((res, rej) => {
      db.run(query, params, (err) => {
        if (err) {
          return rej(new Error(err));
        }
        return res();
      });
    });
  }

  static async read({ id, email }) {
    if (id === undefined && email === undefined) {
      throw new Error("You need to provide id or email");
    }

    const query = id
      ? "SELECT * FROM Users WHERE id = ?"
      : "SELECT * FROM Users WHERE email = ?";

    return new Promise((res, rej) => {
      db.get(query, [id || email], (err, row) => {
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
        //clean up, close the connection
      });
    });
  }

  static async update(id, name, age, email, password) {
    if (!id) {
      throw new Error("You need to provide id");
    }
    const query =
      "UPDATE Users SET name = ?, age = ?, email = ?, password=?  WHERE id = ?";

    return new Promise((res, rej) => {
      db.run(query, [name, age, email, password, id], (err, row) => {
        if (err) {
          return rej(new Error(err));
        }
        return res(row);
      });
    });
  }

  static async delete({ id, email }) {
    if (!id && !email) {
      throw new Error(" You need to provide id or email");
    }
    const query = id
      ? "DELETE FROM Users WHERE id = ?"
      : "DELETE FROM Users WHERE email = ?";
    const param = id || email; // id ? id : email

    return new Promise((res, rej) => {
      db.run(query, [param], (err) => {
        if (err) {
          return rej(new Error("Error"));
        }
        return res();
      });
    });
  }
}

module.exports = Users;
