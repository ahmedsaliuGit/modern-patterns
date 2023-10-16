class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

// const dog1 = new Dog("Relmind");
// const dog2 = new Dog("Giver");
// const dog3 = new Dog("Matty");

// Dog.prototype.play = () => `Playing with owner`;

// console.log(dog1.play());

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "SuperDog is flying";
  }
}

// const dog1 = new SuperDog("Daisy");

// console.log(dog1.bark());
// console.log(dog1.fly());

const dog = {
  bark() {
    return "Woof!";
  },
};

const pet = Object.create(dog);

console.log(dog);
console.log("Direct properties on pet: ", Object.keys(pet));
console.log("Properties on pet's prototype: ", Object.keys(pet.__proto__));
