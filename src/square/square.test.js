const square = require("./square");

describe("square", () => {

    test("Валидное значение", () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(1);
        
    });
});
