"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
let count = 0;
let regex =
  "s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19d{2}|20[01][0-9]|2020)";
class Teachers {
  constructor(teacher) {
    this.map = new Map();
    this.id = count++;
    if (
      typeof teacher.name.first != "string" ||
      typeof teacher.name.last != "string" ||
      typeof teacher.name != "object"
    ) {
      throw new TypeError("Invalid Parameters");
    }
    this.name = teacher.name;
    if (
      teacher.dateOfBirth === undefined ||
      typeof teacher.dateOfBirth !== "string"
    ) {
      throw new TypeError("dateOfBirth is not a string or format is not valid");
    }
    this.dateOfBirth = teacher.dateOfBirth;
    if (
      teacher.emails === undefined ||
      !Array.isArray(teacher.emails) ||
      typeof teacher.emails[0].email !== "string" ||
      typeof teacher.emails[0].primary === false
    ) {
      throw new TypeError("Email is not a string or primary is not filled");
    }
    this.emails = {}.emails;
    if (
      teacher.phones === undefined ||
      !Array.isArray(teacher.phones) ||
      typeof teacher.phones[0].phone !== "string" ||
      typeof teacher.phones[0].primary === false
    ) {
      throw new TypeError("Phone is not a string or primary is not filled");
    }
    this.phones = teacher.phones;
    if (
      teacher.sex === undefined ||
      (typeof teacher.sex !== "string" &&
        ({}.sex !== "male" || {}.sex !== "female"))
    ) {
      throw new TypeError("You should choose Male or Female");
    }
    this.sex = teacher.sex;
    if (
      teacher.subjects === undefined ||
      !Array.isArray(teacher.subjects) ||
      typeof teacher.subjects[0].subject !== "string"
    ) {
      throw new TypeError("Subjects should be an array and subject - string");
    }
    this.subjects = teacher.subjects;
    if (typeof teacher.description !== "string") {
      throw new TypeError("description should be a string");
    }
    this.description = teacher.description;
  }
  add(teacher) {
    this.map.set(this.id, teacher);
    return this.id;
  }
  read(id) {
    console.log(this.map.get(id));
  }
  update(id, teacher) {
    this.map.set(id, teacher);
    return this.teacher;
  }
  remove(id) {
    this.map.delete(id);
  }
}
exports.Teachers = Teachers;
