import { env } from '@/core/env/mod';
import { AES, enc } from 'crypto-js';
import type { Decryptable, Encryptable } from './crypto.interface';
import { BaseDecryptor, BaseEncryptor } from './entity/crypto.base';
import { EncryptionEntity } from './entity/crypto.entity';
import { EncryptionMethod } from './entity/method.enum';

const LIAN_CRYPTION_PRIVATE_KEY = env('LIAN_CRYPTION_PRIVATE_KEY');
const encryptor = AES.encrypt;
const decryptor = AES.decrypt;

class AESEncryptor extends BaseEncryptor implements Encryptable {
	public override encrypt(): EncryptionEntity {
		const result = encryptor(this._value, LIAN_CRYPTION_PRIVATE_KEY);
		const encrypted = new EncryptionEntity(
			result.toString(),
			EncryptionMethod.AES,
		);
		return encrypted;
	}
}

class AESDecryptor extends BaseDecryptor implements Decryptable {
	public override decrypt(): string {
		const bytes = decryptor(this._value, LIAN_CRYPTION_PRIVATE_KEY);
		const decrypted = bytes.toString(enc.Utf8);
		return decrypted;
	}
}

export { AESDecryptor, AESEncryptor };
