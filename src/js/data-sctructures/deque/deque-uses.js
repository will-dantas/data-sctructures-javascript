import { Deque } from "./deque.js";

const deque = new Deque();

console.log(deque.isEmpty());

deque.addFront('William');
deque.addFront('Bruna');

console.log(deque.toString());

deque.addBack('Lilian');

console.log(deque.toString());

console.log(deque.size());

console.log(deque.removeFront());

console.log(deque.toString());

console.log(deque.removeBack());

console.log(deque.toString());

console.log(deque.addFront('William'));

console.log(deque.toString());