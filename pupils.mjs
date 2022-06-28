let count = 0;

class Pupils {
  map = new Map();
  constructor({ name, dateOfBirth, phones, sex, subjects, description }) {
    this.id = count++;

    // if (name === undefined || typeof name != "object") {
    //   throw new TypeError("Name is not a object");
    // }
    this.name = name;
    if (dateOfBirth === undefined || typeof dateOfBirth !== "string") {
      throw new TypeError("dateOfBirth is not a string or format is not valid");
    }
    this.dateOfBirth = dateOfBirth;

    // if (
    //   phones === undefined ||
    //   Array.isArray(phones) ||
    //   typeof phones[0].phone !== "string" ||
    //   typeof emails[0].primary === "boolean"
    // ) {
    //   throw new TypeError("Phone is not a string or primary is not filled");
    // }
    this.phones = phones;
    // if (
    //   sex === undefined ||
    //   (typeof sex !== "string" && (sex !== "male" || sex !== "female"))
    // ) {
    //   throw new TypeError("You should choose Male or Female");
    // }

    this.sex = sex;
    // if (
    //   subjects === undefined ||
    //   Array.isArray(subjects) ||
    //   subjects[0].subject !== "string"
    // ) {
    //   throw new TypeError("Subjects should be an array and subject - string");
    // }
    this.subjects = subjects;

    //   if (typeof description !== "string") {
    //     throw new TypeError("description should be a string");
    //   }
    //   this.description = description;
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