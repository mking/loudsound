import { ALARM } from "./constants/songify";

export default function alarm(message: string, ...optionalParams: any[]) {
  console.log(`%cmking - ${message}`, ALARM, ...optionalParams);
}
