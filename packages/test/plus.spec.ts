import { expect, test, describe } from 'vitest';

// plus.ts
function plus(a: number, b: number): number {
	return a + b;
}

// plus.spec.ts
describe('core: math (some for integeration)', function () {
	test('plus function', function () {
		expect(plus(1, 2)).toEqual(3);
		expect(plus(4, 2)).toEqual(6);
		expect(plus(-1, -2)).toEqual(-3);
		expect(plus(-1, -5)).toEqual(-6);
		expect(plus(1, 2)).toBeTypeOf('number');
	});
});

describe('core: math (each api)', function () {
	test.each<{ input: [number, number]; expect: number }>([
		{ input: [1, 2], expect: 3 },
		{ input: [2, 4], expect: 6 },
		{ input: [-1, -2], expect: -3 },
		{ input: [-1, -5], expect: -6 },
	])('result of ($input) should be equal to $expect', function (item) {
		const result = plus.apply(null, item.input);
		expect(result).toEqual(item.expect);
	});
});

// OR

describe('core: math/plus (specific description)', function () {
	test('it input is (1, 2) and should return 3 value', function () {
		expect(plus(1, 2)).toEqual(3);
	});

	test('it input is (1, 2) and should return a number', function () {
		expect(plus(1, 2)).toBeTypeOf('number');
	});

	test('it input is (-1, -5) and should return -6 value', function () {
		expect(plus(-1, -5)).toEqual(-6);
	});
});

// OR

describe('core: math/plus (generic description)', function () {
	test('result of positive numbers', function () {
		expect(plus(1, 2)).toEqual(3);
	});

	test('typeof result for positive numbers', function () {
		expect(plus(1, 2)).toBeTypeOf('number');
		expect(plus(1, 2)).not.toBeTypeOf('string');
		expect(plus(1, 2)).not.toBeTypeOf('boolean');
	});

	test('result of negative numbers', function () {
		expect(plus(-1, -2)).toEqual(-3);
		expect(plus(-2, -2)).not.toEqual(-3);
		expect(plus(-1, -5)).toEqual(-6);
	});
});
