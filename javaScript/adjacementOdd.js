let arr=[1,1,1,4,3,7,8,4,2,5,5]
let res=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0 && arr[i+1]%2!==0){
        i++
    }else{
        
        res.push(arr[i])
    }
}
console.log(res)