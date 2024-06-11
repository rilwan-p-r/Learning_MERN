function removeConsecutiveOdd(arr) {
    let result = [];
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++
        }
        arr.splice(i,count)
        count=0
    }
    return arr;
  }
  
  let arr = [1, 3, 3, 4, 5, 7, 8, 8, 2, 3];
  console.log(removeConsecutiveOdd(arr)); // Output: [4, 8, 8, 2]
  