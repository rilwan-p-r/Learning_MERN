let word='abcdef'
let evenWords=''
let oddWords=''
for(let i=0;i<word.length;i++){
    if(i%2===0){
        evenWords+=word[i]
    }else{
        oddWords+=word[i]
    }
}
let combinedOne = evenWords+oddWords
console.log(combinedOne)