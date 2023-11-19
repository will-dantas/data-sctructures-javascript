export class StackArray {
  constructor() {
    this.itens = [];
  }

  // insere um elemento no topo da pilha
  push(element) {
    this.itens.push(element);
  }

  // remove e retorna o elemento do topo da pilha
  pop() {
    return this.itens.pop();
  }

  // retorna o elemento no topo da pilha
  peek() {
    return this.itens[this.itens.length - 1];
  }

  // verifica se a pilha está vazia
  isEmpty() {
    return this.itens.length === 0;
  }

  // verifica o tamanho da pilha
  size() {
    return this.itens.length;
  }

  // Limpa os elementos da pilha
  clear() {
    this.itens = [];
  }
};