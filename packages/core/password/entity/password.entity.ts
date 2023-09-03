class PasswordEntity {
	readonly #value: string = '';

	public constructor(value: string | number) {
		this.#value = value.toString();
	}

	public toString(): Readonly<string> {
		return this.#value.toString();
	}

	public valueOf(): Readonly<string> {
		return this.#value.valueOf();
	}

	public get [Symbol.toStringTag](): 'PasswordEntity' {
		return 'PasswordEntity';
	}

	public [Symbol.toPrimitive](hint: string): string | null {
		if (hint === 'string') {
			return this.valueOf();
		}
		return null;
	}

	public static from(value: string): PasswordEntity;
	public static from(value: number): PasswordEntity;
	public static from(value: string | number): PasswordEntity {
		const password = new PasswordEntity(value);
		return password;
	}
}

export { PasswordEntity };
