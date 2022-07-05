let regex =
  "s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19d{2}|20[01][0-9]|2020)";

type Phone = {
  phone: string;
  primary: boolean;
};

type Name = {
  first: string;
  last: string;
};
type Emails = {
  email: string;
  primary: boolean;
};

type Subjects = {
  subject: string;
};
export interface Teacher {
  name: Name;
  dateOfBirth: string;
  emails: Emails[];
  phones: Phone[];
  sex: string;
  subjects: Subjects[];
  description?: string;
}

export class Teachers {
  map = new Map();
  id: number;
  name: Name;
  dateOfBirth: string;
  emails: Emails[];
  phones: Phone[];
  sex: string;
  subjects: Subjects[];
  description?: string;

  constructor(teacher: Teacher) {
    this.id = Math.floor(Math.random() * 100);
    this.name = teacher.name;
    this.dateOfBirth = teacher.dateOfBirth;
    this.emails = teacher.emails;
    this.phones = teacher.phones;
    this.sex = teacher.sex;
    this.subjects = teacher.subjects;
    this.description = teacher.description;
  }
  add(teacher: Teacher) {
    this.map.set(this.id, teacher);
    return this.id;
  }
  read(id: number) {
    console.log(this.map.get(id));
  }
  update(id: number, teacher: Teacher) {
    this.map.set(id, teacher);
  }
  remove(id: number) {
    this.map.delete(id);
  }
}
