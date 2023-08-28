import type { PasswordGeneratorOption } from './option.interface';

const DEFAULT_PASSWORD_GENERATOR_OPTION: PasswordGeneratorOption = {
	length: 32,
	numbers: true,
	lowercases: true,
	uppercases: true,
	symbols: true,
};

export { DEFAULT_PASSWORD_GENERATOR_OPTION };
