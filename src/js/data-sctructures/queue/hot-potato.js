import { Queue } from "./queue.js";

function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
}

const names = ['William', 'Bruna', 'Lilian', 'Pedro', 'Breno', 'Brenda'];
const result = hotPotato(names, 3);

result.eliminated.forEach(name => {
  console.log(`${name} foi eliminado do jogo`);
});

console.log(`O campeão foi ${result.winner}`);
