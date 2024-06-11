function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // Output: 6
console.log(sum(4, 5, 6, 7, 8));  // Output: 30
