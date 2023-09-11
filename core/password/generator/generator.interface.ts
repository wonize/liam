import { PasswordGeneratorOptions } from "./generator.types";

interface PasswordGenerator {
    generate(length: number, options?: Partial<PasswordGeneratorOptions>): string;
  }


export {PasswordGenerator}