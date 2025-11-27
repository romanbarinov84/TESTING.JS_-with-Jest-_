const validateValue = require("./validateValue")

describe("validateValue", () => {
    test.each([10,30,50,80])("валидное число %i", (num) => {
        expect(validateValue(num)).toBe(true)
    })
    test.each([-10,105,130,-50,-1,101])("невалидное число %i", (num) => {
        expect(validateValue(num)).toBe(false);
    });
});