function fibanocci(n){
const arr=[0,1]
    for(let i=2;i<n;i++){
        arr[i]=arr[i-2]+arr[i-1]
    }
    return arr
}
console.log(fibanocci(5));