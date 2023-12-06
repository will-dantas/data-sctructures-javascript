import { CircularLinkedList } from "./circular-linked-list.js";

const circularList = new CircularLinkedList();

circularList.insert(50, 0);
circularList.insert(60, 1);
circularList.insert(70, 2);
circularList.insert(80, 3);

console.log(circularList.toString());

circularList.removeAt(1);

console.log(circularList.toString());