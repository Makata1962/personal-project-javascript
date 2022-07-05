import { LMS, Subject } from "./lms.js";
// import { Pupils } from "./pupils.js";
// import { Groups } from "./groups.js";
// import { Teachers } from "./teacher.js";
// import { Gradebook } from "./gradebooks.js";

const history = new Subject({
  title: "History",
  lessons: 24,
  description: "Bad",
});

const Math = new Subject({
  title: "Math",
  lessons: 12,
  description: "Good",
});

const lms = new LMS();

lms.add(history);
lms.remove(history);
console.log(LMS);

// const lms = new LMS(math);
// lms.add(math);

// lms.add(history);
// lms.remove(math);
// lms.readAll();

// lms.verify(math);

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

const pupil = {
  name: {
    first: "Ilia",
    last: "Kostava",
  },
  dateOfBirth: "18/07/1998", // format date
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
  sex: "male", // male or female
  subjects: [
    {
      subject: "History", // just name property of subject.
    },
  ],
  description: "",
};
const pupil2 = {
  name: {
    first: "string",
    last: "string",
  },
  dateOfBirth: "18/07/1998", // format date
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
  sex: "male", // male or female
  subjects: [
    {
      subject: "History", // just name property of subject.
    },
  ],
  description: "",
};

// const pupils = new Pupils(pupil);
// const pupilId = pupils.add(pupil);

// const otherpupils = new Pupils(pupil2);
// const otherpupilId = otherpupils.add(pupil2);

// pupils.update(pupilId, pupil1);

// pupils.read(pupilId);

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
