export const removeNonDigitFromString = (string) =>
  string.replace(/\D+/g, " ").trim().split(" ");
