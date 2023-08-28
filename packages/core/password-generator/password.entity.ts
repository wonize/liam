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
}

export { PasswordEntity };
