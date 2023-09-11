export interface PasswordGeneratorOption {
	length: number;
	uppercases: boolean;
	lowercases: boolean;
	symbols: boolean;
	digits: boolean;
	customCharacters?: string;
}
