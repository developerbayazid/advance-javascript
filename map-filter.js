const numbers = [3, 4, 6, 5, 6, 3, 10, 8, 9];

const square = numbers.map(element => element * element);
console.log(square);

const evenNumber = numbers.filter(number => number % 2 == 0);
console.log(evenNumber);

const isThere = numbers.find(number => number > 5);
console.log(isThere);