function uniqueLetter(value){
    let letter=value.split('')
    let result= letter.filter((item,index,arr)=>arr.indexOf(item) === arr.lastIndexOf(item))
    return result
}
console.log(uniqueLetter('malayalam'));

// map method
function uniqueLetterByMap(value) {
    let uniqueMap = new Map()
    for(let val of value){
        if(uniqueMap.has(val)){
            uniqueMap.set(val,uniqueMap.get(val)+1)
        }else{
            uniqueMap.set(val,1)
        }
    }
    for(let v of uniqueMap){
        console.log(v);
        if(uniqueMap.get(v)===1){
            return v
        }
    }
    return null
    
}
console.log(uniqueLetterByMap('malayalam'));