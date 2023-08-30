import { PasswordEntity } from '@/core/password/entity/password.entity';

class PasswordMeterCalculator {
	public constructor() {}

	public calculate(password: string | PasswordEntity) {
		let value = password.valueOf();

		let score = 0;
		let length = 0;
		let specialChar = 0;
		let caseMix = 0;
		let numCharMix = 0;

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
