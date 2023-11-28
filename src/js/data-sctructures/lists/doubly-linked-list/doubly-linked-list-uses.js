import { DoublyLinkedList } from "./doubly-linked-list.js";

const doublyList = new DoublyLinkedList();

doublyList.insert(1, 0);

doublyList.insert(2, 1);

doublyList.insert(3, 2);

console.log(doublyList.toString());

doublyList.removeAt(1);

console.log(doublyList.toString());