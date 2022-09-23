import { checkTeenagerStatus } from "./teenager.js";

const testOne = [
  [10, false],
  [12, true],
  [15, true],
  [20, true],
  [25, false],
];



test.each(testOne)("return correct age", 
(age, expectedCheck) => {
  expect(checkTeenagerStatus(age)).toEqual (expectedCheck)
});
