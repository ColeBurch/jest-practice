const sum = require("./sum");
const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesarCipher = require("./caesarCipher");

test("sum function adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("capitalize function capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverseString function reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("calculator add function adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator subtract function subtracts two numbers", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("calculator multiply function multiplies two numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("calculator divide function divides two numbers", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("caesar cipher function shifts letters by 1", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("caesar cipher function shifts letters by 2", () => {
  expect(caesarCipher("hello", 2)).toBe("jgnnq");
});
