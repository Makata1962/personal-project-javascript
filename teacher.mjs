let count = 0;
let regex =
  "s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19d{2}|20[01][0-9]|2020)";
class Teachers {
  map = new Map();
  constructor(name, dateOfBirth, emails, phones, sex, subjects, description) {
    this.id = count++;
    // if (name === undefined || typeof name !== "object") {
    //   throw new TypeError("Name is not a object");
    // }
    this.name = name;
    // if (
    //   // dateOfBirth === undefined ||
    //   typeof dateOfBirth !== "string"
    // dateOfBirth !== regex
    // ) {
    //   throw new TypeError("dateOfBirth is not a string or format is not valid");
    // }
    this.dateOfBirth = dateOfBirth;
    // if (
    //   emails === undefined ||
    //   Array.isArray(emails) ||
    //   typeof emails[0].email !== "string" ||
    //   typeof emails[0].primary === "boolean"
    // ) {
    //   throw new TypeError("Email is not a string or primary is not filled");
    // }
    this.emails = emails;
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
  add(teacher) {
    this.map.set(this.id, teacher);
    return this.id;
  }
  read(id) {
    console.log(this.map.get(id));
  }
  update(id, teacher) {
    this.map.set(id, teacher);
    return this.teacher;
  }
  remove(id) {
    this.map.delete(id);
  }
}