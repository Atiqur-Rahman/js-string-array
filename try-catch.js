const myName = 'ami';
const student = undefined;

// console.log(student.name);
// myName = 'tumi';
try {
    myName = 'tumi';
} catch (error) {
    console.log('getting error', error);
}
console.log(100);
console.log(myName);
