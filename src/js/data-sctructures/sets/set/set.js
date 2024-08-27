export class Set {
  constructor() {
    this.items = {};
  }

  has (element) {
    return element in this.items;
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  clear () {
    this.items = {};
  }

  size () {
    return Object.keys(this.items).length;
  }

  values () {
    return Object.values(this.items);
  }

  union (otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  intersection (otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherSet.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    
    return intersectionSet;
  }

  diffrence (otherSet) {
    const diffrenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        diffrenceSet.add(value);
      }
    });

    return diffrenceSet;
  }

  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubsetOf = true;

    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubsetOf = false;
        return false;
      }
      
      return true;
    });

    return isSubsetOf;
  }
}