
console.log(a)    //undefined because of temporal deadzone
var a=10

console.log(a)  // throw err its block scope
let a=10

console.log(a)  // throw err its block scope
const a=10

sayHello(); // Output: Hello!

function sayHello() {
    console.log('Hello!');
}


sayHello(); // Error: sayHello is not a function
var sayHello = function() {
    console.log('Hello!');
};
