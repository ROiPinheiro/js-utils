const removeNonDigitFromString = (string) => {
  const digitsString = string
    .replace(/,+/g, ".")
    .replace(/[^0-9\.]+/g, " ")
    .replace(/\.+/g, "");

  console.log("digist", digitsString);

  return digitsString.trim().split(" ").map(parseFloat);
};

console.log(removeNonDigitFromString("121 sdf sd34234 sdfsd"));
