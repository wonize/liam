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

		if (this.#option.numbers === true) {
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

	get #character(): string {
		const characters = this.#characters;
		const length = characters.length;
		const position = Math.floor(Math.random() * length);
		return characters.charAt(position);
	}

	public generate(): PasswordEntity {
		const length = this.#option.length;
		let password: string = '';
		for (let count = 0; count < length; count++) {
			password = password.concat(this.#character);
		}
		return PasswordEntity.from(password);
	}

	public *[Symbol.iterator](): Generator<PasswordEntity, void, unknown> {
		let count: number = 0;
		while (count < this.#option.length) {
			let count = 0;
			yield this.generate();
			count += 1;
		}
	}

	public static generate(option?: Partial<PasswordGeneratorOption>) {
		const generator = new PasswordGenerator(option ?? null);
		return generator.generate();
	}
}

export { PasswordGenerator };
