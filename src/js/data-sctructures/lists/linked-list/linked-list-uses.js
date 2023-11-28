import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.push(14);
list.push(15);
list.push(16);

console.log(list.toString());

console.log(list.removeAt(1));

console.log(list.getElementAt(1));

list.insert(23, 1);

console.log(list.toString());

console.log(list.indexOf(16));

list.remove(23);

console.log(list.toString());