// function isPalindrome(word){
//     let reversedWord = word.split('').reverse().join('')
//     if(word===reversedWord){
//         return true
//     }
//     return false
// }

// console.log(isPalindrome('malayalam'));

function isPalindrome(value){
    for(let i=0;i<value.length/2;i++){
        if(value[i]!==value[value.length-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome('malayalam'))