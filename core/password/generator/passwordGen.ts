import { RandomCharacterFromArrayProps } from "./generator.interface";
import { characterSets } from "./password.constants";

function getRandomCharacterFromArray(
  props: RandomCharacterFromArrayProps
): number {
  const length: number = props.array.length;
  const randomIndex: number = Math.floor(Math.random() * length);
  return props.array[randomIndex];
}

function PasswordGenerator() {
  let password: string = "";
  for (let index = 0; index <= 9; index++) {
    const getRandomIndexInMainArray = getRandomCharacterFromArray({
      array: characterSets,
    });
    const getArrayIndex = characterSets[getRandomIndexInMainArray];
    password +=
      getArrayIndex[getRandomCharacterFromArray({ array: getArrayIndex })];
  }
  return password;
}

export { PasswordGenerator };
