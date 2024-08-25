import { SortedLinkedList } from "./sorted-linked-list.js";

const sortedLinkedList = new SortedLinkedList();

sortedLinkedList.insert(1);
sortedLinkedList.insert(2);
sortedLinkedList.insert(3);
sortedLinkedList.insert(4);
sortedLinkedList.insert(3);

console.log(sortedLinkedList.toString());