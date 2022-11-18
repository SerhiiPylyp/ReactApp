export interface Lists {
  [id: number]: List;
}

export interface List {
  id: number;
  name: string;
  tasks: Tasks;
}

export interface Tasks {
  [id: number]: Task;
}

export interface Task {
  id: number;
  name: string;
  checked: boolean;
}

type GetLists = (oldLists: Lists) => Lists;

export interface InitialState {
  lists: Lists;
  setLists: (newLists: Lists | GetLists) => void;
}

export enum TaskKey {
  name = 'name',
  checked = 'checked',
}
