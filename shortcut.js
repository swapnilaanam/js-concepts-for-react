// truth value
// 'abd', 5, true, {}, []
// falsy value
// '', 0, false, null, undefined

let myVar = 5;

// check for truthy value

if(myVar) {
    console.log('True value');
}
else {
    console.log('False value');
}

myVar = 0;

// check for falsy value

if(!myVar) {
    console.log('Falsy value');
}
else {
    console.log('Truthy value');
}

let myMoney = 100;
let food;

if(myMoney > 100) {
    food = 'Biryani';
}
else {
    food = 'Cha Biscuit';
}

console.log(food);

myMoney = 150;

food = myMoney > 100 ? 'Biryani' : 'Cha Biscuit';
console.log(food);

let isActive = false;

const showUser = () => console.log('Show User');
const hideUser = () => console.log('hide user');

// use &&, if the left part is true then the right part gets executed...
isActive && showUser();

// use ||, if the left part is false the the right part gets executed...
isActive || hideUser();

// number to string
let num = 530;
console.log(num);
let numStr = num + '';
console.log(numStr);

// string to number

let str = '550';
let strNum = +str;
console.log(strNum);

// toggle values

isActive = !isActive;

console.log(isActive);


const name = 'Solimullah';
const area = 'Dhaka';

const nobab = {
    name: name,
    area: area,
}

// console.log(nobab);

// object declaration shortcut

const nobab2 = {name, area};
console.log(nobab2);
