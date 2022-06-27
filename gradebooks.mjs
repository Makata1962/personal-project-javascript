class Gradebook {
  constructor(groups, teachers, lms) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }

  map = new Map();
  clear(record) {
    this.map.delete(record);
  }

  addRecord(gradebookId, record) {
    this.map.gradebookId.set(record);
  }
  read(gradebookId, pupilId) {
    this.map.get(gradebookId, pupilId);
  }
  readAll() {
    let array = [];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });

    console.log(array);
  }
}
