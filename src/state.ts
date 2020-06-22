import Publisher from "./publisher";
import Subscriber from "./subscriber";

abstract class State implements Publisher {
  subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  notify() {
    this.subscribers.forEach((subcriber) => subcriber.update());
  }
}

export default State;
