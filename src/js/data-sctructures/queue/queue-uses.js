import { Queue } from "./queue.js";

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue('William');
queue.enqueue('Bruna');
queue.enqueue('Lilian');

console.log(queue.toString());

console.log(queue.size());

queue.dequeue();
queue.dequeue();

console.log(queue.toString());