const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
    test.each([
        [[1, 2, 3], ["1", "2", "3"]],
        [[4, 5.5, 6], ["4", "6"]],
        [[-1, "a", false], ["-1"]]
    ])("преобразует %p в %p", (input, expected) => {
        expect(mapArrToString(input)).toEqual(expected);
    });
});
