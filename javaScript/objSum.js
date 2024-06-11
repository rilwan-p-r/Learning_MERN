let obj = [{a:10,b:20},{c:32,d:32}]
let sum =0
for(let i=0; i<obj.length;i++){
    for(let val in obj[i]){
        sum+=obj[i][val]
    }
}
console.log(sum)