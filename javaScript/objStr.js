let word='gvjjjjsaihssjss'
let obj={}
let count=1

for(let i=0;i<word.length;i++){
    if(word[i]===word[i+1]){
        count++
    }else{
        let repeated=''
        for(let j=0; j<count; j++){
            repeated+=word[i]
        }
            obj[repeated]=count
    count=1
    }

}
console.log(obj)