class ChatRoom {
  logMeassage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    return this.chatroom.logMeassage(this, message);
  }
}

const react = new ChatRoom();

const user1 = new User("John Doe", react);
const user2 = new User("Jane Doe", react);

user1.send("Components are the building block of ReactJs app");
user2.send("Very True!");
