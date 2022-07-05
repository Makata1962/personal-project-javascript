interface subject {
  id?: number;
  title: string;
  lessons: number;
  description?: string;
}

export class LMS {
  map = new Map();

  add(subject: subject) {
    this.map.set(subject.id, subject);
  }

  remove(subject: subject) {
    this.map.delete(subject.id);
  }

  verify(subject: subject) {
    for (let [_, val] of this.map) {
      if (JSON.stringify(subject) == JSON.stringify(val)) {
        return true;
      } else return false;
    }
  }

  readAll() {
    let array: object[] = [];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });

    return array;
  }
}

export class Subject {
  id: number;
  title: string;
  lessons: number;
  description?: string;

  constructor(subject: subject) {
    this.id = Math.floor(Math.random() * 100);
    this.title = subject.title;
    this.lessons = subject.lessons;
    this.description = subject.description;
  }
}

const history = new Subject({
  title: "History",
  lessons: 24,
  description: "Bad",
});

const math = new Subject({
  title: "Math",
  lessons: 12,
  description: "Good",
});
