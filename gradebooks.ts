import { Group } from "./groups";
import { LMS } from "./lms";
import { Teacher } from "./teacher";

type GradebookType = {
  groups: Group;
  teachers: Teacher;
  lms: LMS;
};

export type record = {
  pupilId: number;
  teacherId: number;
  subjectId: number;
  lesson: number;
  mark: number;
};

export class Gradebook {
  map = new Map();
  groups: Group;
  teachers: Teacher;
  lms: LMS;

  constructor(groups: Group, teachers: Teacher, lms: LMS) {
    this.groups = groups;
    this.teachers = teachers;
    this.lms = lms;
  }

  clear() {
    this.map.clear();
  }
  add(id: number, record: record) {
    this.map.set(id, record);
  }

  addRecord(gradebookId: number, record: record) {
    this.map.set(gradebookId, record);
  }
  read(gradebookId: number, pupilId: number) {
    console.log(this.map.get(gradebookId));
  }
  readAll() {
    let array: GradebookType[];
    let newArr = this.map.forEach(function (item) {
      array.push(item);
    });
  }
}
