// let count = 0;
// export class Groups {
//   map = new Map();
//   id: number;
//   constructor(id: number) {
//     this.id = count++;
//   }

//   add(obj: object) {
//     this.map.set(obj.id, obj);
//     return obj.id;
//   }

//   remove(room: number) {
//     this.map.delete(room.id);
//   }

//   verify(room: number) {
//     for (let [_, val] of this.map) {
//       if (JSON.stringify(room) == JSON.stringify(val)) {
//         return true;
//       } else return false;
//     }
//   }

//   update(id: number, group: object) {
//     this.map.set(id, group);
//   }

//   read(id: number) {
//     console.log(this.map.get(id));
//   }
//   readAll() {
//     let array: object[] = [];
//     let newArr = this.map.forEach(function (item) {
//       array.push(item);
//     });

//     console.log(array);
//   }
// }



// const group = new Groups();
// const groupId = group.add();
// const classroom = {
//   id: "JEF5H43H",
//   room: 237,
//   pupils: [],
// };
