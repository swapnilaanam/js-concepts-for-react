// 1. Template String

const numbers = [24, 28, 47, 98, 52];

const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King Khan', 'No.1 Shakib Khan'],
};

let str = `Student name ${student.name} of age ${student.age} got a number of ${numbers[3]}. His favorite movie is ${student.movies[0]}`;
console.log(str);

// 2. Arrow function

const giveFifty = () => 50;
const addTen = num => num + 10;
const isEven = num => num % 2 === 0;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
const doMath = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    return sum;
};

// 3. Spread Operator 
// copy an array
// copy an array + add a new element
// copy an object
// copy an object + add a new property

const newNumbers = [...numbers];
const currentNumber = [...numbers, 87];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumber);

const newStudent = {...student};
const currentStudent = {...student, class: 'XI'};

student.age = 87;
console.log(student);
console.log(newStudent);
console.log(currentStudent);