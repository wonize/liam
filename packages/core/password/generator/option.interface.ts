export interface PasswordGeneratorOption {
	length: number;
	uppercases: boolean;
	lowercases: boolean;
	symbols: boolean;
	numbers: boolean;
	customCharacters?: string;
}
