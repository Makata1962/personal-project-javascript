export class Groups {
  map = new Map();

  constructor(id) {
    this.id = 2;
  }

  add(room) {
    this.map.set(room.id, room);
  }

  remove(room) {
    this.map.delete(room.id);
  }

  verify(room) {
    for (let [_, val] of this.map) {
      if (JSON.stringify(room) == JSON.stringify(val)) {
        return true;
      } else return false;
    }
  }

  readAll() {
    let array = [];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });

    console.log(array);
  }
}

const groups = new Groups();
const room = 236;
const groupId = groups.add(room);


groups.addPupil(groupId, pupil);