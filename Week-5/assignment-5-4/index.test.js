const mathOperations = require("./index.js");

describe("test sum operations", () => {
    test("should return sum of two numbers", () => {
        const result = mathOperations.sum(1, 2);
        expect(result).toEqual(3)
    });

    test("should return NaN if one of the numbers is undefined", () => {
        const result = mathOperations.sum(1, undefined);
        expect(result).toEqual(NaN)
    });
});

describe("test subtract operations", () => {
    test("should return subtraction of two numbers", () => {
        const result = mathOperations.diff(6, 2);
        expect(result).toEqual(4)
    });

    test("should return NaN if one of the numbers is undefined", () => {
        const result = mathOperations.diff(1, undefined);
        expect(result).toEqual(NaN)
    });
});

describe("test multiply operations", () => {
    test("should return multiplication of two numbers", () => {
        const result = mathOperations.multiply(4, 5);
        expect(result).toEqual(20)
    });

    test("should return NaN if one of the numbers is undefined", () => {
        const result = mathOperations.multiply(1, undefined);
        expect(result).toEqual(NaN)
    });
});