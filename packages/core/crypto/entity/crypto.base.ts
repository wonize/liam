import type {
	Decryptable,
	DecryptionOption,
	Encryptable,
	EncryptionOption,
} from '../crypto.interface';
import type { EncryptionEntity } from './crypto.entity';
import { EncryptionMethod } from './method.enum';

abstract class BaseEncryptor implements Encryptable {
	protected _option: EncryptionOption;
	protected _value: string;
	public constructor(value: any, option: EncryptionOption | null = null) {
		this._option = option ?? {
			method: EncryptionMethod.DEFAULT,
		};
		this._value = value.toString();
	}

	public abstract encrypt(): EncryptionEntity;
}

abstract class BaseDecryptor implements Decryptable {
	protected _option: DecryptionOption;
	protected _value: string;
	public constructor(
		value: EncryptionEntity,
		option: DecryptionOption | null = null,
	) {
		this._option = option ?? {};
		this._value = value.toString();
	}

	public abstract decrypt(): string;
}

export { BaseDecryptor, BaseEncryptor };
