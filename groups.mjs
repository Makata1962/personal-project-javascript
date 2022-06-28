let count = 0;
class Groups {
  map = new Map();

  constructor(id) {
    this.id = count++;
  }

  add(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("Parameter should be integer");
    }
    this.map.set(obj.id, obj);
    return obj.id;
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