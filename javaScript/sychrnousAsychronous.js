// asynchronous code in JavaScript:
console.log('Start');

setTimeout(()=>{
    console.log('Timeout completed');
}, 2000);

console.log('End');

// synchronous code in JavaScript:
console.log('Step 1: Start');

function multiply(a, b) {
    return a * b;
}

const result = multiply(2, 3);
console.log('Step 2: Result is', result);

console.log('Step 3: End');
