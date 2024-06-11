function firstLetterCap(value) {
    let result = value.split(' ').map((item,index)=>item.charAt(0).toUpperCase()+item.slice(1))
    return result.join(' ')
    
}
console.log(firstLetterCap('hello world. how have you been ?'));