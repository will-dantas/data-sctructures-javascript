import { StackObject } from "./stack-object.js";

export function decimalToBinary(decNumber) {
  const remSatck = new StackObject();
  let number = decNumber;
  let rem;
  let binarystring = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remSatck.push(rem);
    number = Math.floor(number / 2);
  }

  while(!remSatck.isEmpty()) {
    binarystring += remSatck.pop().toString();
  }

  return binarystring;
}

console.log(decimalToBinary(233));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));