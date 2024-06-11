const { log } = require("console");

const word = "acbhd";
const result = word.split('').sort((a,b)=>b.localeCompare(a)).join('')
console.log(result);

const arr=[2,3,4]
console.log(arr);
arr.unshift(5)
console.log(arr);
arr.shift()
console.log(arr);
arr.pop()
console.log(arr);
arr.push(5)
console.log(arr);

const val='hello'
console.log(val.charAt(0).toUpperCase()+val.slice(1));  

const array=[1,2,3,4,5]
const spl = array.splice(1,2)
console.log(spl);
console.log(array);

