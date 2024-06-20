let obj = [
  {
    a: {
      age: 1,
    },
  },
  {
    b: {
      age: 2,
    },
  },
];
// console.log(obj[0].a.age);
let sum=0
for(let i=0;i<obj.length;i++){
    let key=Object.keys(obj[i])[0]
    sum+=obj[i][key].age
}
console.log(sum);
//