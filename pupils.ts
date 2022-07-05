type Phone = {
  phone: string;
  primary: boolean;
};

type Name = {
  first: string;
  last: string;
};

export interface Pupil {
  name: Name;
  dateOfBirth: string;
  phones: Phone[];
  sex: string;
  description?: string;
}

export class Pupils {
  map = new Map();

  id: number;
  name: object;
  dateOfBirth: string;
  phones: object[];
  sex: string;
  description?: string;

  constructor(pupil: Pupil) {
    this.id = Math.floor(Math.random() * 100);
    this.name = pupil.name;
    this.dateOfBirth = pupil.dateOfBirth;
    this.phones = pupil.phones;
    this.sex = pupil.sex;
    this.description = pupil.description;
  }

  add(pupil: Pupil) {
    this.map.set(this.id, pupil);
    return this.id;
  }
  read(id: number) {
    return this.map.get(id);
  }
  update(id: number, pupil: Pupil) {
    console.log(this.map.set(id, pupil));
  }
  remove(id: number) {
    this.map.delete(id);
  }
}