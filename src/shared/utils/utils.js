export const getRandomStringValueFromArray = (array) => {
  if (!Array.isArray(array)) {
    return "";
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
