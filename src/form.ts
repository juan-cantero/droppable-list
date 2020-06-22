import liststate from "./listState";

class Form {
  formElement: HTMLFormElement;
  taskInput: HTMLInputElement;

  constructor() {
    this.formElement = document.getElementById("form")! as HTMLFormElement;
    this.taskInput = document.getElementById("task-input")! as HTMLInputElement;
    this.configure();
  }

  get task() {
    return this.taskInput.value;
  }

  configure() {
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      liststate.addTask(this.task);
    });
  }
}

export default Form;
