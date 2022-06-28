import { pupil, pupil2, pupilId } from "./index.mjs";
import { groups } from "./index.mjs";
import { teachers, teacherId } from "./index.mjs";
import { lms } from "./index.mjs";

let count = 0;
class Gradebook {
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
  add(id) {
    this.map.set(id, record);
  }

  addRecord(gradebookId, record) {
    this.map.set(gradebookId, record);
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

const gradebooks = new Gradebook(groups, teachers, lms);

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  // subjectId: id,
  lesson: 1,
  mark: 9,
};

const gradebook = gradebooks.add(groups.id);
gradebooks.addRecord(record);

gradebooks.read(gradebook, pupilId);

// const students = gradebooks.readAll(gradebook, pupilId);
