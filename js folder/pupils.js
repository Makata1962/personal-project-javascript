"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
let count = 0;
class Pupils {
    constructor(pupil) {
        this.map = new Map();
        this.id = count++;
        if (typeof pupil.name.first !== "string" ||
            typeof pupil.name.last !== "string" ||
            typeof pupil.name !== "object") {
            throw new TypeError("Invalid Parameter");
        }
        this.name = pupil.name;
        if (pupil.dateOfBirth === undefined ||
            typeof pupil.dateOfBirth !== "string") {
            throw new TypeError("dateOfBirth is not a string or format is not valid");
        }
        this.dateOfBirth = pupil.dateOfBirth;
        if (pupil.phones === undefined ||
            !Array.isArray(pupil.phones) ||
            typeof pupil.phones[0].phone !== "string" ||
            typeof pupil.phones[0].primary === true) {
            throw new TypeError("Phone is not a string or primary is not filled");
        }
        this.phones = pupil.phones;
        if (pupil.sex === undefined ||
            (typeof pupil.sex !== "string" &&
                (pupil.sex !== "male" || pupil.sex !== "female"))) {
            throw new TypeError("You should choose Male or Female");
        }
        this.sex = pupil.sex;
        if (typeof pupil.description !== "string") {
            throw new TypeError("description should be a string");
        }
        this.description = {}.description;
    }
    add(pupil) {
        this.map.set(this.id, pupil);
        return this.id;
    }
    read(id) {
        console.log(this.map.get(id));
    }
    update(id, pupil) {
        console.log(this.map.set(id, pupil));
    }
    remove(id) {
        this.map.delete(pupil.id);
    }
}
exports.Pupils = Pupils;
