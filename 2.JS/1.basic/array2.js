let array1 = [1, 2, 3, 4 ,5];
const array2 = [6, 7, 8];
console.log(array1[0]);
console.log(array2[2]);

array1.pop;
array2.push(9);
console.log(array2);

let array3 = array1.slice(0,3);
console.log(array3);
array1.splice(0, 3);
console.log(array1);
array3 = array1.concat(array2);
console.log(array3);
let array4 = [...array1, ...array2];
console.log(array4);
array1.splice(1, 0, ...array2);
console.log(array1);