const fixedSizeArray = new Int8Array(5); // Creates an array of size 5 with all elements initialized to 0

console.log(fixedSizeArray); // Output: Int8Array(5) [0, 0, 0, 0, 0]

// Trying to change the length of a typed array throws an error
// try {
//     fixedSizeArray.length = 10; // This will not change the length
// } catch (e) {
//     console.error(e); // TypeError: Cannot assign to read only property 'length' of object '[object Int8Array]'
// }

// You can modify individual elements
fixedSizeArray[0] = 1;
console.log(fixedSizeArray); // Output: Int8Array(5) [1, 0, 0, 0, 0]
