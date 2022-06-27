let count = 0;

class Pupils {
  map = new Map();
  constructor() {
    this.id = count++;
  }
  add(pupil) {
    this.map.set(this.id, pupil);
    return this.id;
  }
  read(id) {
    console.log(this.map.get(id));
  }
  update(id, pupil) {
    this.map.set(id, pupil);
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

// Create new Pupil from Pupil's data
const Ilia = new Pupils();

const pupilId = Ilia.add(pupil);
Ilia.read(pupilId);

Ilia.update(pupilId, pupil2);
Ilia.read(pupilId);
