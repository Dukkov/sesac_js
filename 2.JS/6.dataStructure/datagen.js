const arr = Array.from({length: 100}, () => Math.floor(Math.random() * 100));

// console.log(arr);

const randomSet = new Set();
while (randomSet.size < 100) 
    randomSet.add(Math.floor(Math.random() * 100));

const arr2 = Array.from(randomSet);
console.log(arr2);