"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
class Groups {
    constructor(group) {
        this.map = new Map();
        this.room = group.room;
        this.pupils = group.pupils;
        this.id = group.id;
    }
    add(obj) {
        this.map.set(obj.id, obj);
        return obj.id;
    }
    addPupil(id, pupil) {
        this.map.set(id, pupil);
    }
    verify(room) {
        for (let [_, val] of this.map) {
            if (JSON.stringify(room) == JSON.stringify(val)) {
                return true;
            }
            else
                return false;
        }
    }
    update(id, group) {
        this.map.set(id, group);
    }
    read(id) {
        console.log(this.map.get(id));
    }
    readAll() {
        let array = [];
        let newArr = this.map.forEach(function (item) {
            array.push(item);
        });
        console.log(array);
    }
}
exports.Groups = Groups;
const classroom = {
    id: "JEF5H43H",
    room: 237,
    pupils: [],
};
const secondRoom = {
    id: "JEF5H3H",
    room: 240,
    pupils: [],
};
const groups = new Groups(classroom);
groups.add(secondRoom);
// const groupId = group.add();
