import { getRandomStringValueFromArray } from "./utils";
test("it should return an empty string is argument passed is not an array", () => {
  const expected = "";
  const actual = getRandomStringValueFromArray("");

  expect(actual).toBe(expected);
});

test("it should return a random value from a string array", () => {
  const arr = ["1", "2", "3"];
  const actual = getRandomStringValueFromArray(arr);

  expect(arr.includes(actual)).toBe(true);
});
