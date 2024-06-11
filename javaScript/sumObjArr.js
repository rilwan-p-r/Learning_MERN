const obj = { a: [10, 4], b: 2, c: [5], d: 3 };
let sum =0;
for(let key in obj){
    if(Array.isArray(obj[key])){
        sum+=obj[key].reduce((acc,curr)=>acc+curr,0)
    }
}
console.log(sum)