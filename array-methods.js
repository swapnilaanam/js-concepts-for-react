const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 9000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
];

// 1. map
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// 2. forEach
products.forEach(product => console.log(product));
products.forEach(product => {
    console.log(product.color);
});

// 3. filter
const cheap = products.filter(product => product.price <= 3000);
console.log(cheap);
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find
const searchedProduct = products.find(product => product.name.includes('n'));
console.log(searchedProduct); 