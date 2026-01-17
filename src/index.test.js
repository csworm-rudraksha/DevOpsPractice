const { add, subtract, multiply, divide } = require('./index');

describe('Calculator Functions', () => {
  describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test('adds zero correctly', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts 5 - 3 to equal 2', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers correctly', () => {
      expect(subtract(-1, -2)).toBe(1);
    });

    test('subtracts zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('multiplies 4 * 3 to equal 12', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    test('multiplies by zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers correctly', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    test('divides 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides negative numbers correctly', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
