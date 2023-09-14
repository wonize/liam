import { PasswordEntity } from '@/core/password/entity/password.entity';
import type { PasswordGeneratorOption } from '@/core/password/generator/option.interface';
import { PasswordGenerator } from '@/core/password/generator/password.generator';
import { beforeEach, describe, expect, test } from 'vitest';
import { createRandomMock } from './random.mock';

const MOCK_OPTION_LOWERCASE: PasswordGeneratorOption = {
	digits: false,
	length: 8,
	lowercases: true,
	symbols: false,
	uppercases: false,
};

describe('Core/PasswordGenerator', function () {
	describe('{ LOWRCASE }', function () {
		let password: PasswordEntity;
		beforeEach(function () {
			const getRandomMock = createRandomMock();
			global.Math.random = () => getRandomMock();
			password = PasswordGenerator.generate(MOCK_OPTION_LOWERCASE);
		});

		test('should be instance of PasswordEntity', function () {
			expect(password).toBeTypeOf('object');
			expect(password).toBeInstanceOf(PasswordEntity);
		});

		test('should be match with lowercase pattern', function () {
			expect(password.valueOf()).toMatch(/^[a-z]+$/);
			expect(password.valueOf()).not.toMatch(/^[^a-z]+$/);
		});

		test('should be value a sequence', function () {
			expect(password.valueOf()).toMatch('abcdefgh');
			expect(password.toString()).toMatch('abcdefgh');
			expect('' + password).toMatch('abcdefgh');
			expect(''.concat(password as any)).toMatch('abcdefgh');
			expect(`${password}`).toMatch('abcdefgh');
		});

		test('should be length in range 4 or more', function () {
			expect(password).toHaveLength(8);
			expect(password.length).toBeGreaterThanOrEqual(4);
		});

		test('should be converted to primitive value', function () {
			expect(`${password}`).toBeTypeOf('string');
			expect(`${password}`).toMatch(/^[a-z]+$/);
			expect(''.concat(password as any)).toBeTypeOf('string');
			expect(''.concat(password as any)).toMatch(/^[a-z]+$/);
			expect('' + password).toBeTypeOf('string');
			expect('' + password).toMatch(/^[a-z]+$/);
			expect(Object.prototype.toString.call(password)).toMatch(/^\[object PasswordEntity\]$/);
		});
	});
});
