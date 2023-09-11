import { PasswordEntity } from '@/core/password/entity/password.entity';
import {
	LOWER_CHARACTERS,
	NUMBER_CHARACTERS,
	SYMBOL_CHARACTERS,
	UPPER_CHARACTERS,
} from './character.constants';
import { DEFAULT_PASSWORD_GENERATOR_OPTION } from './option.constants';
import type { PasswordGeneratorOption } from './option.interface';

class PasswordGenerator {
	#option: PasswordGeneratorOption;

	public constructor(option: Partial<PasswordGeneratorOption> | null = null) {
		this.#option = Object.assign(
			{},
			DEFAULT_PASSWORD_GENERATOR_OPTION,
			option ?? {},
		);
	}

	get #characters(): string {
		let characters = '';

		if (this.#option.lowercases === true) {
			characters = characters.concat(LOWER_CHARACTERS);
		}

		if (this.#option.uppercases === true) {
			characters = characters.concat(UPPER_CHARACTERS);
		}

		if (this.#option.digits === true) {
			characters = characters.concat(NUMBER_CHARACTERS);
		}

		if (this.#option.symbols === true) {
			characters = characters.concat(SYMBOL_CHARACTERS);
		}

		if (typeof this.#option.customCharacters === 'string') {
			characters = characters.concat(this.#option.customCharacters);
		}

		return characters;
	}

	public generate(): PasswordEntity {
		const length = this.#option.length;
		const characters = this.#characters;
		let password: string = '';
		for (let count = 0; count < length; count++) {
			const position = Math.floor(Math.random() * length);
			const character = characters.at(position);
			password = password.concat(character ?? '');
		}
		return PasswordEntity.from(password);
	}

	public static generate(option?: Partial<PasswordGeneratorOption>) {
		const generator = new PasswordGenerator(option ?? null);
		return generator.generate();
	}
}

export { PasswordGenerator };
