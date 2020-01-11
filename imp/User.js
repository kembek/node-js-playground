class User {
  constructor(username, age) {
    return {
      username,
      age
    };
  }
}

const printUser = user =>
  console.log(`User name is ${user.username}, old ${user.age}`);

exports.printUser = printUser;

// module.exports = User;
