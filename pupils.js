"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
let count = 0;
class Pupils {
    constructor(pupil) {
        this.map = new Map();
        this.id = count++;
        this.name = pupil2.name;
        this.dateOfBirth = pupil2.dateOfBirth;
        this.phones = pupil2.phones;
        this.sex = pupil2.sex;
        this.description = pupil2.description;
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
        this.map.delete(pupil2);
    }
}
exports.Pupils = Pupils;
const pupil2 = {
    name: {
        first: "string",
        last: "string",
    },
    dateOfBirth: "18/07/1998",
    emails: [
        {
            email: "ipach17@freeuni.edu.ge",
            primary: true,
        },
    ],
    phones: [
        {
            phone: "592102793",
            primary: true,
        },
    ],
    sex: "male",
    subjects: [
        {
            subject: "History", // just name property of subject.
        },
    ],
    description: "",
};
const pupils = new Pupils(pupil2);
const pupilId = pupils.add(pupil2);
