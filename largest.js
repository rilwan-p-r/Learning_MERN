function findLargest(arr){
    let largest=-Infinity
    let secondLargest=-Infinity
    let smallest=Infinity
    let secondSmallest=Infinity
    for(let i=0; i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest=smallest
            smallest=arr[i]
            if(secondSmallest<smallest){
                secondSmallest=arr[i]
            }
        }else{
            secondLargest=largest
            largest =arr[i]
            if(secondLargest<largest){
                secondLargest=arr[i]
            }
        }
    }
    return {secondLargest,secondSmallest}
}
let arr=[99,6,2,1,3,5,4,5]
console.log(findLargest(arr))
