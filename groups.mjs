let count = 0;
class Groups {
  map = new Map();

  constructor(id) {
    this.id = count++;
  }

  add(room) {
    // if (typeof room !== "number") {
    //   throw new TypeError("Parameter should be integer");
    // }
    this.map.set(room.id, room);
    return room.id;
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

  update(id, group) {
    this.map.set(id, group);
  }

  read(id) {
    console.log(this.map.get(id));
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
const classroom = {
  id: "JEF5H43H",
  room: 237,
  pupils: [], // array of pupils.
};
const groupId = groups.add(classroom);

// groups.read(groupId);
// groups.readAll();

groups.update(groupId, {
  id: "asas",
  room: 267,
  pupils: [],
});

groups.read(groupId);