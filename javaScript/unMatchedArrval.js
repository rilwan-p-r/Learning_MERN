arr1 = [1,2,3,4,5]
arr2 =[3,4,5,6,7,8]
unmatched = []

function isInArr(element,arr){
    for(let i=0;i<arr.length;i++){
    if(element===arr[i]){
        return true
    }
    }
    return false
}
for(let i=0;i<arr1.length;i++){
    if(!isInArr(arr1[i],arr2)){
        unmatched.push(arr1[i])
    }
}

for(let i=0;i<arr2.length;i++){
    if(!isInArr(arr2[i],arr1)){
        unmatched.push(arr2[i])
    }
}
console.log(unmatched)