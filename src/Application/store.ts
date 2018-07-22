import {
  computed,
  observable
} from 'mobx';

class MyWorkStore {
  @observable private selectedTask: object | null = null;
  @observable private selectedMenu = '';

  private tasks = {
    'Project1': [
      { id: '1', title: 'P1 Task 1', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
      { id: '2', title: 'P1 Task 2', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
      { id: '3', title: 'P1 Task 3', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
      { id: '4', title: 'P1 Task 4', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
    ],
    'Project2': [
      { id: '5', title: 'P2 Task 1', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
      { id: '6', title: 'P2 Task 2', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
      { id: '7', title: 'P2 Task 3', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
      { id: '8', title: 'P2 Task 4', state: 'New', dueDate: '2018-07-17', assignee: {key: 'a', text: 'anish'}, description: 'this is description' },
    ]
  };

  @computed public get getTasks() {
    // Api call
    return this.tasks[this.selectedMenu] || null;
  }

  @computed public get getSelectedMenu() {
    // Api call
    return this.selectedMenu;
  }

  @computed public get getSelectedTask() {
    return this.selectedTask;
  }

  public setSelectedMenu = (value: string) => {
    this.selectedMenu = value;
  }

  public setSelectedTask = (task: object) => {
    this.selectedTask = task;
  }

  public editTask = (item, project ) => {
    // tslint:disable-next-line:no-console
    console.log(item, project);
  }

}

export default new MyWorkStore();
