import Subscriber from "./subscriber";
import liststate from "./listState";

class List implements Subscriber {
  app: HTMLElement;
  ul: HTMLUListElement;

  constructor() {
    this.app = document.getElementById("app")!;
    this.ul = document.createElement("ul")!;
    liststate.subscribe(this);
    this.attach();
  }
  update(): void {
    this.renderList();
  }

  attach() {
    this.app.insertAdjacentElement("beforeend", this.ul);
  }

  renderList() {
    let liElements = "";

    liststate.tasks.forEach((task) => {
      liElements += Task(task);
    });
    this.ul.innerHTML = liElements;
  }
}

function Task(task: string) {
  return `<li>${task}</li>`;
}

export default List;
