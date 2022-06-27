let count = 0;

class Groups {
  groups = new Groups();
  room = 236;

  add(groups) {
    this.groups.set(groups.id, groups);
  }
  addPupil(groupId, pupil) {
    this.groups.set(groupId.id, pupil);
  }
  removePupil(groupId, id) {
    this.groups.delete(groupId, id);
  }
  read(id) {
    console.log(this.groups.get(id));
  }
  update(groupId, {}) {
    this.groups.set(groupId, {});
  }
  readAll() {
    let array = [];
    let newArr = this.group.forEach(function (item) {
      array.push(item);
    });

    console.log(array);
  }
}
