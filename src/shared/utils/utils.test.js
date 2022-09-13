import { getRandomStringValueFromArray } from "./utils";
test("it should return an empty string is argument passed is not an array", () => {
  const expected = "";
  const actual = getRandomStringValueFromArray("");

  expect(actual).toBe(expected);
});
