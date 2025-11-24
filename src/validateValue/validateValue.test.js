const validateValue = require("./validateValue");

describe("validateValue", () => {

  test("валидное значение - 0", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("валидное значение - 50", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("валидное значение - 100", () => {
    expect(validateValue(100)).toBe(true);
  });

  test("невалидное значение - -1", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("невалидное значение - -101", () => {
    expect(validateValue(-101)).toBe(false);
  });

});
