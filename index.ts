import { LMS, Subject } from "./lms.js";
import { Pupil, Pupils } from "./pupils.js";
// import { Groups } from "./groups.js";
import { Teachers } from "./teacher.js";
// import { Gradebook } from "./gradebooks.js";

const history = new Subject({
  title: "History",
  lessons: 24,
  description: "Bad",
});

const math = new Subject({
  title: "Math",
  lessons: 12,
  description: "Good",
});
const biology = new Subject({
  title: "Biology",
  lessons: 10,
  description: "Perfect",
});

const lms = new LMS();

lms.add(math);
lms.add(history);
lms.add(biology);
lms.remove(history);
console.log(lms.verify(history));
console.log(lms.readAll());

const pupil1 = {
  name: {
    first: "Ilia",
    last: "Pachulia",
  },
  dateOfBirth: "18.12.1970", // format date
  emails: [
    {
      email: "string",
      primary: "boolean",
    },
  ],
  phones: [
    {
      phone: "string",
      primary: "boolean",
    },
  ],
  sex: "string", // male or female
  subjects: [
    {
      subject: "string", // just name property of subject.
    },
  ],
  description: "string",
};



const pupil: Pupil = {
  name: {
    first: "Ilia",
    last: "Pachulia",
  },
  dateOfBirth: "18/07/2000", // format date
  phones: [
    {
      phone: "592102793",
      primary: true,
    },
  ],
  sex: "male", // male or female
  description: "",
};
const pupil2: Pupil = {
  name: {
    first: "Irakli",
    last: "Pachulia",
  },
  dateOfBirth: "18/07/2002", // format date
  phones: [
    {
      phone: "592102793",
      primary: true,
    },
  ],
  sex: "male", // male or female
  description: "",
};

const pupils = new Pupils(pupil);
const pupilId = pupils.add(pupil);

// console.log(pupils.read(pupilId));
// pupils.update(pupilId, pupil2);

const pupilId2 = pupils.add(pupil2);
console.log(pupils);
pupils.remove(pupilId2);

console.log(pupils);


/*
const teacher = {
  name: {
    first: "Koka",
    last: "Makhaldiani",
  },
  dateOfBirth: "18/07/1998", // format date
  emails: [
    {
      email: "il.pachulia@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "592102793",
      primary: true,
    },
  ],
  sex: "string", // male or female
  subjects: [
    {
      subject: "string", // just name property of subject.
    },
  ],
  description: "string",
};

const teacher2 = {
  name: {
    first: "Ilia",
    last: "Pachulia",
  },
  dateOfBirth: "10.10.2020", // format date
  emails: [
    {
      email: "il.pachulia@gmail.com",
      primary: true,
    },
  ],
  phones: [
    {
      phone: "591102340",
      primary: true,
    },
  ],
  sex: "male", // male or female
  subjects: [
    {
      subject: "History", // just name property of subject.
    },
  ],
  description: "string",
};

const teachers = new Teachers(teacher2);
const teacherId = teachers.add(teacher2);

const pachulia = new Teachers();
const teacherId2 = pachulia.add();

teachers.read(teacherId);

teachers.remove(teacherId);

teachers.update(teacherId, pachulia);

teachers.read(teacherId);

const group = new Groups();
const classroom = {
  id: "JEF5H43H",
  room: 237,
  pupils: [],
};
const groupId = group.add(classroom);

group.read(groupId);
group.readAll();

group.update(groupId, {
  id: "asas",
  room: 267,
  pupils: [],
});

group.read(groupId);

const gradebooks = new Gradebook(Groups, Teachers, lms);

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: Subject.id,
  lesson: 1,
  mark: 9,
};
const gradebookId = gradebooks.add(group.id, record);
gradebooks.add(gradebookId, record);
gradebooks.addRecord(gradebookId, record);

gradebooks.read(gradebookId, pupilId);

const students = gradebooks.readAll(gradebookId);




*/
