import { EncryptionMethod } from './method.enum';

class EncryptionEntity {
	method = EncryptionMethod.DEFAULT;

	#value: any;
	public constructor(value: any, method: null | EncryptionMethod = null) {
		this.#value = value;
		this.method = method ?? EncryptionMethod.DEFAULT;
	}

	public valueOf(): string {
		return '';
	}

	public toString(): string {
		return '';
	}
}

export { EncryptionEntity };
