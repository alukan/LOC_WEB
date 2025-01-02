class Config {
  static max_number_of_users = 3;
  static max_number_of_posts = 20;
  static max_number_of_comments = 30;
}

class config2 extends Config {
  static max_number_of_users = 14;
  static max_number_of_likes = 40;
}

const instance = new Config();

class MathOperations {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    return a / b;
  }
}

//console.log(MathOperations.add(1, 2));
class UserStats {
  static number_of_users = 0;
}

class User {
  constructor(name) {
    this.name = name;
    UserStats.number_of_users += 1;

    if (UserStats.number_of_users > Config.max_number_of_users) {
      throw new Error("too many users");
    }
  }
}

const username = new User("billy");
console.log(UserStats.number_of_users);
const username2 = new User("Fayra");
console.log(UserStats.number_of_users);
const username3 = new User("Fayra");
console.log(UserStats.number_of_users);
const username4 = new User("Fayra");
console.log(UserStats.number_of_users);
