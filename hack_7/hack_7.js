/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let firstChar = item.charAt(0).toUpperCase();
    let remainingChars = item.slice(1);
    result.push(firstChar + remainingChars);
}

//export result
module.exports = result;
console.log(result);