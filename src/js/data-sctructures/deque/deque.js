export class Deque {
  constructor() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowerCount > 0) {
      this.lowerCount--;
      this.items[this.lowerCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.count++;
      this.lowerCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowerCount];
    delete this.items[this.lowerCount];
    this.lowerCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowerCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowerCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowerCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowerCount]}`;
    for (let i = this.lowerCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}