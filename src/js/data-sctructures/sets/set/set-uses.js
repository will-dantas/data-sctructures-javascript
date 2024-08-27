import { Set } from "./set.js";

const set = new Set();

set.add(1);
set.add(2);

console.log(set.size());
console.log(set.values());

console.log(set.has(1));
console.log(set.has(3));
console.log(set.values());

set.delete(1);

console.log(set.has(1));
console.log(set.values());

set.clear();

console.log('========================================');

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);
setA.add(6);

const setB = new Set();
setB.add(4);
setB.add(6);

const unionAB = setA.union(setB);

console.log('a: ', setA.values());

console.log('b: ', setB.values());

console.log('union: ', unionAB.values());

const intersectionAB = setA.intersection(setB);

console.log('intersection: ', intersectionAB.values());

const diffrenceAB = setA.diffrence(setB);

console.log('diffrence: ', diffrenceAB.values());

console.log('========================================');

const setC = new Set();

setC.add(2);
setC.add(3);

console.log('b subconjunto de a?', setB.isSubsetOf(setA));
console.log('b subconjunto de c?: ', setB.isSubsetOf(setC));