
const mapArrToString = require("./mapArrToString");

describe("mapArrToString" , () => {
    test("валидное значение" , () => {
        expect(mapArrToString([1,2,3,4.5,"10",true])).toEqual(["1","2","3"]);
    } )
    test("валидное значение" , () => {
        expect(mapArrToString([])).toEqual([]);
    } )
    test("Невалидное значение" , () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4]);
    } )
})