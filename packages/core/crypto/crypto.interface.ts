import type { EncryptionEntity } from './entity/crypto.entity';
import type { EncryptionMethod } from './entity/method.enum';

export interface Decryptable {
	decrypt(): string;
}

export interface DecryptionOption {
	salt?: string;
}

export interface Encryptable {
	encrypt(): EncryptionEntity;
}

export interface EncryptionOption {
	method: EncryptionMethod;
}
