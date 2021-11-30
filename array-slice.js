const numbers = [1,2,3,4,5,6,7,8,9];

const part = numbers.slice(2, 5);
const removed = numbers.splice(2, 3, 88, 99, 33);

const num = numbers.join(",");

console.log(part);
console.log(removed);
console.log(numbers);
console.log(num);