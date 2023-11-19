export class StackObject {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  // chave: count, valor: element
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // remove e retorna o elemento do topo da pilha
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // retorna o elemento no topo da pilha
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  // verifica se a pilha está vazia
  isEmpty() {
    return this.count === 0;
  }

  // verifica o tamanho da pilha
  size() {
    return this.count;
  }

  // Limpa os elementos da pilha
  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString} , ${this.items[i]}`;
    }

    return objString;
  }
};