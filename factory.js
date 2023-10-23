const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName: () => `${firstName} ${lastName}`,
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
});
const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "janedoe@example.com",
});

console.log(user1);
console.log(user2);
