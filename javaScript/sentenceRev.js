function sentenceRev(value) {
    let words=value.split(' ')
    let result=  words.map((item,index)=>item.split('').reverse().join(''))
    return result.join(' ')
}

console.log(sentenceRev('hello world'));