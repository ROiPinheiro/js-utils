import { removeNonDigitFromString } from "./removeNonDigitFromString";

describe("removeNonDigitFromString tests", () => {
  it("should returns an array of numbers from a string", () => {
    const stringTest = "12ed5 gh575j 89kjt 4dd  342d g 6$%$@";

    const response = removeNonDigitFromString(stringTest);
    expect(response).toStrictEqual(["12", "5", "575", "89", "4", "342", "6"]);
  });
});
