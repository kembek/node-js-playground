class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const user = new User("Luke", "Sky Waker", 21);

console.log(user);

function greeting(u) {
  console.log(`Hello! My name is ${u.lastName} ${u.firstName}!`);
}

greeting(user);
