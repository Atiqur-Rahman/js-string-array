const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
const character = anthem.split('');
// console.log(character);

// slice
const smallslice = anthem.slice(5, 13);
console.log(smallslice);
console.log(anthem);

// substr
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = 'amader';
const second = 'city';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ Kibria');
// console.log(fullString);

// join
const words1 = ['alim', 'badhon', 'cameron', 'david'];
// const allJoined = words1.join('');
// const allJoined = words1.join(' ');
const allJoined = words1.join(', ');

console.log(allJoined);
