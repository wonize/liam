class PasswordEntity {
	readonly #value: string = '';

	public constructor(value: string) {
		this.#value = value;
	}

	public toString(): Readonly<string> {
		return this.#value.toString();
	}

	public valueOf(): Readonly<string> {
		return this.#value.valueOf();
	}

	public [Symbol.toStringTag]() {
		return 'PasswordEntity';
	}

	public [Symbol.toPrimitive](hint: string): string | null {
		if (['default', 'string'].indexOf(hint) !== -1) {
			return this.valueOf();
		}
		return null;
	}

	public static from(value: string): PasswordEntity;
	public static from(value: number): PasswordEntity;
	public static from(value: any): PasswordEntity {
		const data = value.toString();
		const password = new PasswordEntity(value);
		return password;
	}
}

export { PasswordEntity };
