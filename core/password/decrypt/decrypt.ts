import Crypto from "crypto-js";
import { Props } from "./decrypt.interface";

const SECRET_KEY = "a111999"; // should to be in env file

function Decryption(props: Props): string {
  const bytes = Crypto.AES.decrypt(props.hash, SECRET_KEY);
  return bytes.toString(Crypto.enc.Utf8);
}
