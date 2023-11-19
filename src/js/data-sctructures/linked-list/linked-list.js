import { Node } from "../models/node.js";
import { defaulEquals } from "../utils/default-equals.js";

export class LinkedList {
  constructor(equalsFn = defaulEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }
}