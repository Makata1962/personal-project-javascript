import { LMS, Subject } from "./lms.mjs";

const history = new Subject({
  title: "History",
  lessons: 24,
  description: "good",
});

export const math = new Subject({
  title: "math",
  lessons: 20,
  description: "bad",
});

const lms = new LMS();

lms.add(math);
// lms.add(math);

lms.readAll();
