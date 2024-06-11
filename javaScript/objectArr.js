const arr = [2, 4, 54, 67, 213, 45, 89, 21, 6, 3, 67, 12, 56, 232];

const result = [
  { a: 2, b: [4] },
  { a: 54, b: [67, 213] },
  { a: 45, b: [89, 21, 6] },
  { a: 3, b: [67, 12, 56, 232] },
];

let newResult = [];
let i = 0;
while (i < arr.length) {
  let obj = {
    a: arr[i],
    b: [],
  };
  i++
  let limit = newResult.length + 1;
  let j = 1;

  while (j <= limit) {
    obj.b.push(arr[i]);
    i++
    j++
  }
  newResult.push(obj)
}
console.log(newResult);
