import { LMS, Subject } from "./lms.mjs";
import { pupil, pupil2, pupilId } from "./pupils.mjs";
import { groups } from "./groups.mjs";
import { teachers, teacherId } from "./teacher.mjs";

const history = new Subject({
  title: 1,
  lessons: 24,
  description: "good",
});

export const math = new Subject({
  title: "math",
  lessons: 20,
  description: "bad",
});

export const lms = new LMS();

// lms.add(math);
// lms.add(math);

lms.add(history);
// lms.remove(math)
lms.readAll();

// lms.verify(math);

export const groups = new Groups();
const classroom = {
  id: "JEF5H43H",
  room: 237,
  pupils: [], // array of pupils.
};
const groupId = groups.add(classroom);

// groups.read(groupId);
// groups.readAll();

groups.update(groupId, {
  id: "asas",
  room: 267,
  pupils: [],
});

// groups.read(groupId);

export const pupil = {
  name: {
    first: "Ilia",
    last: "Pachulia",
  },
  dateOfBirth: "string", // format date
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

export const pupil2 = {
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
export const pupil3 = {
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

const pupils = new Pupils(pupil3);
export const pupilId = pupils.add(pupil);

const otherpupils = new Pupils(pupil2);
// const otherpupilId = otherpupils.add(pupil2);

// pupils.update(pupilId, pupil2);

// pupils.read(pupilId);

export const teacher = {
  name: {
    first: "Koka",
    last: "Makhaldiani",
  },
  dateOfBirth: "18/07/1998", // format date
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

const teacher2 = {
  name: {
    first: "Ilia",
    last: "Pachulia",
  },
  dateOfBirth: "string", // format date
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

export const teachers = new Teachers();
export const teacherId = teachers.add(teacher);

const pachulia = new Teachers();
const teacherId2 = pachulia.add(teacher2);

// teachers.read(teacherId);
// pachulia.read(teacherId2);

teachers.remove(teacherId);

teachers.update(teacherId, pachulia);

// teachers.read(teacherId);
// pachulia.read(teacherId2);
