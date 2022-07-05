"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = exports.LMS = void 0;
class LMS {
    constructor() {
        this.map = new Map();
        this.count = 0;
    }
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
            }
            else
                return false;
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
exports.LMS = LMS;
class Subject {
    constructor(subject) {
        this.id = this.count++;
        this.title = subject.title;
        this.lessons = subject.lessons;
        this.description = subject.description;
    }
}
exports.Subject = Subject;
