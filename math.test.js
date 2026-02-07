const { factorial, fibonacci } = require('./math');

describe('factorial', () => {
    test('factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 debe ser 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial de numero negativo debe ser -1', () => {
        expect(factorial(-3)).toBe(-1);
    });
});

describe('fibonacci', () => {
    test('fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci de 1 debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci de 6 debe ser 8', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('fibonacci de 10 debe ser 55', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('fibonacci de numero negativo debe ser -1', () => {
        expect(fibonacci(-1)).toBe(-1);
    });
});
