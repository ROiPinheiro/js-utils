export const extractNumbersFromString = (string) => {
  const isPointAndZeroes = (string) => /(\.0+)+/.test(string);
  const removePoint = (string) => string.replace(/\.+/g, "");

  const parse = (item) =>
    parseFloat(isPointAndZeroes(item) ? removePoint(item) : item);

  return string
    .replace(/,+/g, ".")
    .replace(/[^0-9\.]+/g, " ")
    .trim()
    .split(" ")
    .map(parse);
};
