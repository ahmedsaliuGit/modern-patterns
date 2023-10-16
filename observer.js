class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(funct) {
    this.observers.push(funct);
  }

  unsubscribe(funct) {
    this.observers = this.observers.filter((observer) => observer !== funct);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
