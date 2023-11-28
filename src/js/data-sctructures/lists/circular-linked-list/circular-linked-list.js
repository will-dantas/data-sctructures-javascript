import { Node } from "../../models/node.js";
import { defaulEquals } from "../../utils/default-equals.js";
import { LinkedList } from "../linked-list/linked-list.js";

export class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaulEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.size());
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }
}

const circularList = new CircularLinkedList();

circularList.insert(50, 0);
circularList.insert(60, 1);


console.log(circularList.toString());