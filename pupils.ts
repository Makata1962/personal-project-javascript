let count = 0;

export class Pupils {
  map = new Map();
  constructor(pupil) {
    this.id = count++;

  
    this.name = pupil.name;
  
    this.dateOfBirth = pupil.dateOfBirth;

   
    this.phones = pupil.phones;
   

    this.sex = pupil.sex;
  
    this.description = {}.description;
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
