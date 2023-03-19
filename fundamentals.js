// 1. declaring variable using let, const
const fatherName = 'Abdul Utal';

let season = 'rainy';
season = 'winter';

// console.log(season);

// 2. condition
// 6 condition: >, <, >=, <=, ===, !==
// multiple condition: &&, ||

const num1 = 24;
const num2 = 27;

// console.log(num1 > num2);
// console.log(num1 >= num2);
// console.log(num1 === num2);
// console.log(num1 !== num2);
// console.log(num1 < num2);
// console.log(num1 <= num2);

if(fatherName === 'abdul' || season === 'winter') {
    console.log('One of them is true...');
}
else if(fatherName === 'Abdul') {
    // console.log('else if is true...');
}
else {
    // console.log('else is true');
}

// 3. function

function multiply(number1, number2) {
    // console.log(number1, number2);
    return number1 * number2;
}

// console.log(multiply(num1, num2));

// 4. Array
// Access array element by index
// length
// indexOf
// includes

const numbers = [24, 28, 47, 98, 52];
// console.log(numbers);
// console.log(numbers[2]);
// console.log(numbers.length);

numbers.push(155);
console.log(numbers);
numbers.pop();
console.log(numbers);

console.log(numbers.indexOf(28));
console.log(numbers.indexOf(105));

console.log(numbers.includes(45));
console.log(numbers.includes(98));

// 5. loop
for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}

let i = 0;

while(i < numbers.length) {
    // console.log(numbers[i]);
    i++;
}

// 6. object
// access array in 3 ways
// directly by property name
// by property name string
// by property name string variable

const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King Khan', 'No.1 Shakib Khan']
}

// property name string variable
let propertyName = 'name';

// console.log(student.name);
// console.log(student['name']);
// console.log(student[propertyName]);

// console.log(student.movies[0]);