import State from "./state";

class ListState extends State {
  private static Liststate: ListState;
  tasks: string[] = [];

  private constructor() {
    super();
  }

  static getListStateInstance() {
    if (!this.Liststate) this.Liststate = new ListState();
    return this.Liststate;
  }

  addTask(task: string) {
    this.tasks.push(task);
    this.notify();
  }
}

const liststate = ListState.getListStateInstance();

export default liststate;
