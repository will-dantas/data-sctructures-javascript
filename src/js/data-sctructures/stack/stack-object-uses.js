import { StackObject } from "./stack-object";

const stackObject = new StackObject();

stackObject.push(5);
stackObject.push(8);

console.log(stackObject);

console.log(stackObject.toString());

console.log(stackObject.peek());

stackObject.pop(8);

console.log(stackObject);