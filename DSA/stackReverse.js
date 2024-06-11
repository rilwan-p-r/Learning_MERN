const word = 'javkcdc'
let arr=[]
for(let i=0;i<word.length;i++){
    arr.push(word[i])
}
let result=''
while(arr.length){
    result+=arr.pop()
}
console.log(result);