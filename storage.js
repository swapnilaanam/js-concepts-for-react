const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value) {
        localStorage.setItem(id, value);
    }

    idInput.value = '';
    valueInput.value = '';
}

const friends = [20, 85, 14, 45, 78];

localStorage.setItem('friends', JSON.stringify(friends));

console.log(JSON.parse(localStorage.getItem('friends')));

const student = {
    id: 24, 
    name: 'Shakib Khan',
    movies: [24, 78, 54]
}

localStorage.setItem('student', JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem('student')));

console.log(localStorage.length);