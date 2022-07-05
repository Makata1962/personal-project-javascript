// let count = 0;
// let regex =
//   "s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19d{2}|20[01][0-9]|2020)";
// export class Teachers {
//   map = new Map();
//   id: number;
//   name: object;
//   dateOfBirth: string;
//   emails: string[];
//   phones: object[];
//   sex: string;
//   subjects: object[];
//   description: string;
//   constructor(teacher: object) {
//     this.id = count++;

//     this.name = teachers.name;

//     this.dateOfBirth = teachers.dateOfBirth;

//     this.emails = teachers.emails;

//     this.phones = teachers.phones;

//     this.sex = teachers.sex;

//     this.subjects = teachers.subjects;

//     this.description = teachers.description;
//   }
//   add(teacher: object) {
//     this.map.set(this.id, teacher);
//     return this.id;
//   }
//   read(id: number) {
//     console.log(this.map.get(id));
//   }
//   update(id: number, teacher: object) {
//     this.map.set(id, teacher);
//     return teacher;
//   }
//   remove(id: number) {
//     this.map.delete(id);
//   }
// }

// const teacher = {
//   name: {
//     first: "Koka",
//     last: "Makhaldiani",
//   },
//   dateOfBirth: "18/07/1998", // format date
//   emails: [
//     {
//       email: "il.pachulia@gmail.com",
//       primary: true,
//     },
//   ],
//   phones: [
//     {
//       phone: "592102793",
//       primary: true,
//     },
//   ],
//   sex: "string", // male or female
//   subjects: [
//     {
//       subject: "string", // just name property of subject.
//     },
//   ],
//   description: "string",
// };

// const teachers = new Teachers(teacher);
// const teachersId = teachers.add(teachers);
