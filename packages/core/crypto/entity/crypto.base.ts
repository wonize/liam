import { Encryptable, EncryptionOption } from '../crypto.interface';
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

export { BaseEncryptor };
