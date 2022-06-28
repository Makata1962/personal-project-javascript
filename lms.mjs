let count = 0;

export class LMS {
  map = new Map();

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

    console.log(array);
  }
}

export class Subject {
  constructor({ title, lessons, description }) {
    this.id = count++;
    // if (typeof title !== "string" || title === undefined) {
    //   throw new TypeError("Title is not a string or it is an empty");
    // }
    this.title = title;
    //  if (typeof lessons !== "number" || lessons === undefined) {
    //    throw new TypeError("Lessons is not a number or it is an empty");
    //  }
    this.lessons = lessons;
    //  if (typeof description !== "string") {
    //    throw new TypeError("Description is not a string");
    //  }
    this.description = description;
  }
}
