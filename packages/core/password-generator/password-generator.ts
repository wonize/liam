import {
	LOWER_CHARACTERS,
	NUMBER_CHARACTERS,
	SYMBOL_CHARACTERS,
	UPPER_CHARACTERS,
} from './character.constants';
import { DEFAULT_PASSWORD_GENERATOR_OPTION } from './option.constants';
import type { PasswordGeneratorOption } from './option.interface';
import { PasswordEntity } from './password.entity';

class PasswordGenerator {
	#option: PasswordGeneratorOption;

	public constructor(option: Partial<PasswordGeneratorOption> | null = null) {
		this.#option = Object.assign(
			{},
			DEFAULT_PASSWORD_GENERATOR_OPTION,
			option ?? {},
		);
	}

	public generate(): PasswordEntity {
		let characters = '';

		if (this.#option.lowercases === true) {
			characters = characters.concat(LOWER_CHARACTERS);
		}

		if (this.#option.uppercases === true) {
			characters = characters.concat(UPPER_CHARACTERS);
		}

		if (this.#option.numbers === true) {
			characters = characters.concat(NUMBER_CHARACTERS);
		}

		if (this.#option.symbols === true) {
			characters = characters.concat(SYMBOL_CHARACTERS);
		}

		if (typeof this.#option.customCharacters === 'string') {
			characters = characters.concat(this.#option.customCharacters);
		}

		let password = '';
		let length = this.#option.length;
		for (let index = 0; index < length; index++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			password = password.concat(characters[randomIndex]);
		}

		const result = new PasswordEntity(password);
		return result;
	}
}
