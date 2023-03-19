// 1. JSON

const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King Khan', 'No.1 Shakib Khan']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

// 3. Object keys, values

const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

// 4. for for array

const numbers = [24, 78, 45, 98, 25];
numbers.forEach(num => console.log(num));

const square = numbers.map(num => num * 2);
console.log(square);

// use for of loop for array like object (you can also use it for normal array as well)

// use for in loop for object

for(const propName in student) {
    console.log(`${propName}: ${student[propName]}`);
}

// add or remove an element from array

const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 9000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'camera', price: 7000, brand: 'canon', color: 'gray'},
];

// add
const newProduct = {name: 'webcam', price: 700, brand: 'a4tech'};

const newProducts = [...products, newProduct];
console.log(newProducts);

// remove

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);