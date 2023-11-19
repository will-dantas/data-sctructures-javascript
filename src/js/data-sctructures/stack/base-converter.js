import { StackObject } from "./stack-object.js";

export function baseConverter(decNumber, base) {
  const remSatck = new StackObject();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let basestring = '';

  if (!base >= 2 && base <= 36) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remSatck.push(rem);
    number = Math.floor(number / base);
  }

  while(!remSatck.isEmpty()) {
    basestring += digits[remSatck.pop()];
  }

  return basestring;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));