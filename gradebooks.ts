// let count = 0;
// export class Gradebook {
//   map = new Map();
//   id: number;
//   groups: object;
//   teachers: object;

//   lms: object;
//   constructor(groups: object, teachers: object, lms: object) {
//     this.id = count++;
//     this.groups = groups;
//     this.teachers = teachers;
//     this.lms = lms;
//   }

//   clear() {
//     this.map.clear();
//   }
//   add(id: number, record: number) {
//     this.map.set(id, record);
//   }

//   addRecord(gradebookId: number, record: number) {
//     this.map.set(gradebookId, record);
//   }
//   read(gradebookId: number, pupilId: number) {
//     console.log(this.map.get(gradebookId));
//   }
//   readAll() {
//     let array: object[] = [];
//     let newArr = this.map.forEach(function (item) {
//       array.push(item);
//     });

//     console.log(array);
//   }
// }
