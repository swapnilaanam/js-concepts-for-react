// 1. array destructuring

const numbers = [34, 45];

// const x = numbers[0];
// const y = numbers[1];

// console.log(x, y);

// let [x, y] = [34, 45];
let [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2) {
    const num = [num1, num2];
    return num;
}

let [first, second] = boxify(90, 87);
console.log(first, second);

// 2. object destructuring
const student = {
    name: 'Shakib Khan',
    age: 32,
    movies: ['King Khan', 'No.1 Shakib Khan'],
};

// const { name, age } = student;


// const { name, age } = { id: 24, name: 'John', salary: 3200, age: 45};

// console.log(name, age);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'javaScript'],
    specification: {
        height: 67,
        drink: 'water',
        weight: 80,
        address: 'Banani, Dhaka',
        watch: {
            color: 'black',
            price: 500,
            brand: 'gucci'
        }
    }
};

const {ide, machine} = employee;
console.log(ide, machine);

const {weight, address} = employee.specification;
console.log(weight, address);

const {color, brand} = employee?.specification?.watch;
console.log(color, brand);

// we can destructure nested object like this also

// const {ide, machine, specification: { height, drink, watch: { price } } } = employee;
// console.log(ide, machine, height, drink, price);

// const {specification, specification: {watch: {price}}} = employee;
// console.log(specification);
// console.log(price);
