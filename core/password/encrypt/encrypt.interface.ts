export interface Props {
  password: string;
}

interface PasswordEncryptor {
    encrypt(password: string): string;
}
