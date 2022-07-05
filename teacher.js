"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
let regex = "s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19d{2}|20[01][0-9]|2020)";
class Teachers {
    constructor(teacher) {
        this.map = new Map();
        this.id = Math.floor(Math.random() * 100);
        this.name = teacher.name;
        this.dateOfBirth = teacher.dateOfBirth;
        this.emails = teacher.emails;
        this.phones = teacher.phones;
        this.sex = teacher.sex;
        this.subjects = teacher.subjects;
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
    }
    remove(id) {
        this.map.delete(id);
    }
}
exports.Teachers = Teachers;
