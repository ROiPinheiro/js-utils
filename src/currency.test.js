import { toBRL } from "./currency";

describe("removeNonDigitFromString tests", () => {
  it("should returns R$ 2.000,00 if 2000 has been passed as parameter", () => {
    const stringTest = "2000";
    const response = toBRL(stringTest);

    expect(response).toBe("R$ 2.000,00");
  });
});
