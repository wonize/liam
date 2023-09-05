import { PasswordEntity } from '@/core/password/entity/password.entity';
import type { PasswordGeneratorOption } from '@/core/password/generator/option.interface';
import { PasswordGenerator } from '@/core/password/generator/password.generator';
import { beforeEach, describe, expect, test } from 'vitest';
import { createRandomMock } from './random.mock';

const MOCK_OPTION_LOWERCASE: PasswordGeneratorOption = {
	digits: false,
	length: 8,
	lowercases: false,
	symbols: false,
	uppercases: false,
};

describe('Core/PasswordGenerator', function () {
	describe('generate', function () {
		let password: PasswordEntity;
		beforeEach(function () {
			const getRandomMock = createRandomMock();
			global.Math.random = () => getRandomMock();
			password = PasswordGenerator.generate(MOCK_OPTION_LOWERCASE);
			console.log(password.toString());
		});

		test('should be instance of PasswordEntity', function () {
			expect(password).toBeTypeOf('object');
			expect(password).toBeInstanceOf(PasswordEntity);
		});
	});
});
