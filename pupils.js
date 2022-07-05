"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
    constructor(pupil) {
        this.map = new Map();
        this.id = Math.floor(Math.random() * 100);
        this.name = pupil.name;
        this.dateOfBirth = pupil.dateOfBirth;
        this.phones = pupil.phones;
        this.sex = pupil.sex;
        this.description = pupil.description;
    }
    add(pupil) {
        this.map.set(this.id, pupil);
        return this.id;
    }
    read(id) {
        return this.map.get(id);
    }
    update(id, pupil) {
        console.log(this.map.set(id, pupil));
    }
    remove(id) {
        this.map.delete(id);
    }
}
exports.Pupils = Pupils;
