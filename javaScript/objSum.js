let obj = [
  { a: 10, b: 20 },
  { c: 32, d: 32 },
];
let sum = 0;
for (let i = 0; i < obj.length; i++) {
  for (let val in obj[i]) {
    sum += obj[i][val];
  }
}
console.log(sum);
const obj1 = [
  { af: 4, adr: 5 },
  { afp: 4, dadr: 5 },
  { aff: 4, addr: 5 },
];

