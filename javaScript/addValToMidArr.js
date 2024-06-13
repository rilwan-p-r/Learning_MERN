let arr=[1,2,4,5]
let middle =Math.floor(arr.length/2)
arr.splice(middle,0,3)
console.log(arr)

// let arr=[1,2,4,5]
// let middle =Math.floor(arr.length/2)
// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     if(i===middle){
//         newArr.push(3)
//     }
//     newArr.push(arr[i])
// }
// arr=newArr
// console.log(arr)