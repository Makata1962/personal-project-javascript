import { Pupil } from "./pupils";

export interface Group {
  id: string;
  room: number;
  pupils: Pupil[];
}

export class Groups {
  map = new Map();
  id: string;
  room: number;
  pupils: Pupil[];

  constructor(group: Group) {
    this.room = group.room;
    this.pupils = group.pupils;
    this.id = group.id;
  }

  add(obj: Group) {
    this.map.set(obj.id, obj);
    return obj.id;
  }

  addPupil(id: string, pupil: Pupil) {
    this.map.set(id, pupil);
  }

  verify(room: number) {
    for (let [_, val] of this.map) {
      if (JSON.stringify(room) == JSON.stringify(val)) {
        return true;
      } else return false;
    }
  }

  update(id: number, group: object) {
    this.map.set(id, group);
  }

  read(id: number) {
    console.log(this.map.get(id));
  }
  readAll() {
    let array: object[] = [];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });

    console.log(array);
  }
}
