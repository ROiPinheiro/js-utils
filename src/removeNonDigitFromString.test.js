import { extractNumbersFromString } from "./removeNonDigitFromString";

describe("extractNumbersFromString tests", () => {
  it("should returns an array of numbers from a string with floating points numbers", () => {
    const stringTest = "255.33 R$ 25.53";

    const response = extractNumbersFromString(stringTest);
    expect(response).toStrictEqual([255.33, 25.53]);
  });

  it("should returns an array of numbers from a string with numbers inside of words", () => {
    const stringTest = "gh575j 4dd dd342d g6$%$@ dd42.$$$!";

    const response = extractNumbersFromString(stringTest);
    expect(response).toStrictEqual([575, 4, 342, 6, 42]);
  });

  it("should returns an array of numbers from a string with different types of 3000", () => {
    const stringTest = "3000 dasd 3,000 aeqd 3.000";

    const response = extractNumbersFromString(stringTest);
    expect(response).toStrictEqual([3000, 3000, 3000]);
  });
});
