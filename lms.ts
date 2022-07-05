export class LMS {
  map = new Map();
  count = 0;

  add(subject) {
    this.map.set(subject.id, subject);
  }

  remove(subject) {
    this.map.delete(subject.id);
  }

  verify(subject) {
    for (let [_, val] of this.map) {
      if (JSON.stringify(subject) == JSON.stringify(val)) {
        return true;
      } else return false;
    }
  }

  readAll() {
    let array = [];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });

    return array;
  }
}

export class Subject {
  constructor(subject) {
    this.id = this.count++;

    this.title = subject.title;

    this.lessons = subject.lessons;

    this.description = subject.description;
  }
}
