// let obj = [
//   {
//     a: 4,
//   },
//   {
//     b: 3,
//   },
//   {
//     a: 1,
//   },
//   {
//     v: 8,
//   },
//   {
//     s: 7,
//   },
// ];
// // let sortedArr=Object.entries(obj).sort((a,b)=>a[1]-b[1])
// // let sortedObj=Object.fromEntries(sortedArr)
// // console.log(sortedObj);

// obj.sort((a, b) => {
//   let aValues = Object.values(a);
//   let bValues = Object.values(b);

//   return aValues - bValues;
// });
// console.log(obj);
let obj1 = {
  a: 2,
  b: 5,
  c: 7,
  d: 3,
};
let objArr = Object.entries(obj1);
console.log(objArr);
let swap;
do {
  swap = false;
  for (let i = 0; i < objArr.length-1; i++) {
    if (objArr[i][1] > objArr[i + 1][1]) {
      [objArr[i], objArr[i + 1]] = [objArr[i + 1], objArr[i]];
      swap = true;
    }
  }
} while (swap);
let sortedObj={}
for (let i = 0; i < objArr.length; i++) {
    sortedObj[objArr[i][0]]=objArr[i][1]
}
// objArrortedObj=Object.fromEntries(objArr)

console.log(sortedObj);
