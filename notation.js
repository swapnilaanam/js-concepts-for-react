const person = {
    name: 'lal mia',
    profession: 'traffic surgeon',
    age: 32,
    address: 'Shahabag',
    25: 'Summuer',
    'son-name': 'Sunny'
}

// dot notation

let proName = 'profession';

const prf1 = person.profession;

// bracket notation

const prf2 = person['profession'];
const prf3 = person[proName];
// console.log(prf3);

const season = person['25'];
console.log(season);

const weather = person['son-name'];
console.log(weather);