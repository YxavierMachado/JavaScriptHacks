/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let numbers = [1, 2, 3, 4];
result = numbers.map(num => {
    return num * 2 - 1;
});

//export result
module.exports = result;
console.log(result);