const arr = [2, 4, 5, 7, 9, 5,3,8];
const val = [];
function isPrime(value) {
  if (value < 2) {
    return false;
  }
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(isPrime(8));
function sum(arr){
    return arr.filter(isPrime).reduce((curr,item)=>curr+item,0)
}
console.log(sum(arr));

  


// let arr = [2, 37, 4, 5, 8, 9];
// let sum = 0;
// for (let val of arr) {
//   for ( j = 2; j < val; j++) {
//     if (val % j === 0) {
//       break;
//     }
//   }
//   if (j == val) {
//     sum += val;
//   }
// }
// console.log(sum);

