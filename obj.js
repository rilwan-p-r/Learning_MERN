// write a function to find how many times each character is repeated “hhfuoigggg”
// Output should be {hh:2, f:1, u:1,o:1,i:1, gggg:4)
let word='gvjjjjsaihssggss'
let obj={}
for(const char of word){
    obj[char] = obj[char]+1 || 1;
}
let freq = {}
for(const key in obj){
    let str= '';
    for(let i=0;i<obj[key];i++){
        str+=key
    }
    freq[str] = obj[key]
};

console.log(freq)

// “hhfuoigggg”
// {hh:2, f:1, u:1, o:1,i:1, gggg:4)