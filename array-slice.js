const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);

/* const numberSpliced2 = numbers.splice(4, 3, 99, 111, 777, 888);
console.log(numberSpliced2);
console.log(numbers); */

const numberSpliced3 = numbers.splice(4, 0, 99, 111);
console.log(numberSpliced3);
console.log(numbers);
