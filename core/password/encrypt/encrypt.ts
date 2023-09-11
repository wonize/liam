import Crypto from "crypto-js";
import { Props } from "./encrypt.interface";
const SECRET_KEY = "a111999"; // should to be in env file

function Encryption(props: Props): string {
  const encryptedText = Crypto.AES.encrypt(
    props.password,
    SECRET_KEY
  ).toString();
  return encryptedText;
}
export { Encryption };
