
 const square = require("./square");

 describe("square" , () => {
    test("коректное значение" , () => {
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5) // получим число меньше чем 5
        expect(square(2)).toBeGreaterThan(3)// больше 3 
        expect(square(2)).not.toBeUndefined()
    })
 })