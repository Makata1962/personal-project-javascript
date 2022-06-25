class LMS {
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

    return array;
  }
}

let count = 0;

class Subject {
  constructor({ title, lessons, description }) {
    this.id = count++;
    this.title = title;
    this.lessons = lessons;
    this.description = description;
  }
}

const history = new Subject({
  title: "History",
  lessons: 24,
  description: "good",
});

const math = new Subject({
  title: "math",
  lessons: 20,
  description: "bad",
});

const lms = new LMS();

lms.add(history);
// lms.add(math);

console.log(lms.verify(math));
