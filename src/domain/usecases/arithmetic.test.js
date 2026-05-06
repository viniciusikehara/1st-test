const { add, subtract, multiply, divide } = require('./arithmetic');

test('add() adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -2)).toBe(-3);
  expect(add(1.5, 2.5)).toBe(4);
});

test('subtract() subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(-1, -1)).toBe(0);
  expect(subtract(2.5, 1.5)).toBe(1);
});

test('multiply() multiplies two numbers', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(-2, 3)).toBe(-6);
  expect(multiply(1.5, 2)).toBe(3);
});

test('divide() divides two numbers', () => {
  expect(divide(6, 3)).toBe(2);
  expect(divide(-6, 2)).toBe(-3);
  expect(divide(4.5, 1.5)).toBe(3);
});

test('divide() throws error when dividing by zero', () => {
  expect(() => divide(1, 0)).toThrow('Division by zero is not allowed');
});
