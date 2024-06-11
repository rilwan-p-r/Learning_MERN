let arr=[2,1,5,4,3,6,9,7,8]
let res=[]
for(let val of arr){
    if(val%2===0){
        res.push(val)
    }
}
while(res.length){
    console.log(res.pop())
}