
let count = 0;
export class Gradebook {
  map = new Map();

  constructor(groups, teachers, lms) {
    this.id = count++;
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }

  clear() {
    this.map.clear();
  }
  add(id,record) {
    this.map.set(id, record);
  }

  addRecord(gradebookId, record) {
    this.map.set(gradebookId, record);
  }
  read(gradebookId, pupilId) {
    console.log(this.map.get(gradebookId, pupilId));
  }
  readAll() {
    let array = [];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });

    console.log(array);
  }
}
