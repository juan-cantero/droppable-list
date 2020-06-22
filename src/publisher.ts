import Subscriber from "./subscriber";

export default interface Publisher {
  subscribers: Subscriber[];
  subscribe(subscriber: Subscriber): void;
  notify(): void;
}
