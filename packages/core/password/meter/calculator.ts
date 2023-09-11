import { PasswordEntity } from '@/core/password/entity/password.entity';

const ALPHABET_PATTERN = /-/gm;
const ALPHABET_LOWERCASE_PATTERN = /-/gm;
const ALPHABET_UPPERCASE_PATTERN = /-/gm;
const DIGITS_PATTERN = /-/gm;
const PASSWORD_MINIMUM_SIZE = 4;
const MINIMUM_STRONG = 1;

class PasswordMeterCalculator {
	#_value: number = MINIMUM_STRONG;

	set #value(value: boolean) {
		const sign = value === true ? 1 : -1;
		const nextValue = this.#value + sign;
		this.#_value = Math.max(nextValue, MINIMUM_STRONG);
	}
	get #value(): number {
		return this.#_value;
	}

	#password: string;
	public constructor(password: string | PasswordEntity) {
		this.#password = password.toString();
	}

	public hasAlphabet(): boolean {
		return ALPHABET_PATTERN.test(this.#password);
	}

	public hasLowercase(): boolean {
		return ALPHABET_LOWERCASE_PATTERN.test(this.#password);
	}

	public hasUppercase(): boolean {
		return ALPHABET_UPPERCASE_PATTERN.test(this.#password);
	}

	public hasDigits(): boolean {
		return DIGITS_PATTERN.test(this.#password);
	}

	public hasMinimumSize(): boolean {
		return this.#password.length > PASSWORD_MINIMUM_SIZE;
	}

	#calcSize() {
		const hasMinSize = this.hasMinimumSize();

		if (hasMinSize) {
			for (let index = 0; index < this.#password.length; index++) {
				this.#value;
			}
		}

		this.#value = hasMinSize;
	}

	#calcAlphabet() {
		this.#value = this.hasAlphabet();
	}

	#calcLowercase() {
		this.#value = this.hasLowercase();
	}

	#calcUppercase() {
		this.#value = this.hasUppercase();
	}

	#calcDigits() {
		this.#value = this.hasDigits();
	}

	public calculate() {
		let score = 0;
		let length = 0;
		let specialChar = 0;
		let caseMix = 0;
		let numCharMix = 0;
		const value = this.#password;

		const specialCharRegex = /[^A-Za-z0-9]/g;
		const lowercaseRegex = /(.*[a-z].*)/g;
		const uppercaseRegex = /(.*[A-Z].*)/g;
		const numberRegex = /(.*[0-9].*)/g;
		const repeatCharRegex = /(\w)(\1+\1+\1+\1+)/g;

		const hasSpecialChar = specialCharRegex.test(value);
		const hasLowerCase = lowercaseRegex.test(value);
		const hasUpperCase = uppercaseRegex.test(value);
		const hasNumber = numberRegex.test(value);
		const hasRepeatChars = repeatCharRegex.test(value);

		// TODO : repeat-sequence
		// TODO : sequance
		// TODO : black-list | leaked
		// TODO : commonly-used

		if (value.length > 4) {
			if ((hasLowerCase || hasUpperCase) && hasNumber) {
				numCharMix = 1;
			}

			if (hasUpperCase && hasLowerCase) {
				caseMix = 1;
			}

			if ((hasLowerCase || hasUpperCase || hasNumber) && hasSpecialChar) {
				specialChar = 1;
			}

			if (value.length > 8) {
				length = 1;
			}

			if (value.length > 12 && !hasRepeatChars) {
				length = 2;
			}

			if (value.length > 20 && !hasRepeatChars) {
				length = 3;
			}

			score = length + specialChar + caseMix + numCharMix;

			if (score > 4) {
				score = 4;
			}
		}

		return score;
	}
}
