import { BaseEncryptor } from './entity/crypto.base';
import { EncryptionEntity } from './entity/crypto.entity';

class Sha256Encryptor extends BaseEncryptor {
	public override encrypt(): EncryptionEntity {
		const value = this._value;
		const encrypted = '';
		const encryptedData = new EncryptionEntity(encrypted);
		return encryptedData;
	}
}

export { Sha256Encryptor };
