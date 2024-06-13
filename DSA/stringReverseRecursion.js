let word='helloworld'
let result=''
// console.log(word.slice(-1))
// for(let i=word.length-1;i>=0;i--){
//     result+=word[i]
// }

// function reverse(str){
//     if(str.length<1){
//         return str
//     }
//     return str.slice(-1) + reverse(str.slice(0,-1))
// }
// console.log(reverse(word))

function reverse(str){
    if(str.length<1){
        return str
    }
    return str.slice(-1) + reverse(str.slice(0,-1))
}
console.log(reverse(word))
// console.log(result)

function reverse1 (str){
    if(!str.length)return "";
    return reverse1(str.slice(1))+str.charAt(0);
}
console.log(reverse1(word))
