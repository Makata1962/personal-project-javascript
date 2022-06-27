let count = 0;

class Pupils {
  map = new Map();
  constructor(name, dateOfBirth, phones, sex, subjects, description) {
    this.id = count++;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.phones = phones;
    this.sex = sex;
    this.subjects = subjects;
    this.description = description;
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

const pupil = {
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

const pupil2 = {
  name: {
    first: "Ilia",
    last: "Kostava",
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

const pupil1 = new Pupils();
const pupilId = pupil1.add(pupil);

const kostava = new Pupils();
const kostavaId = kostava.add(pupil2);
// console.log(pupilId2);

console.log(kostava)
pupil1.read(pupilId);
pupil1.read(kostavaId);

// pupil1.update(pupilId, pupil2);

// pupil1.remove(pupilId);
