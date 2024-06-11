let word = "hellkljdqJDNJNNo";
let obj = {};
let count = 1;
for(let char of word){
  obj[char] = obj[char]+1 || 1

}

let newObj={}
for(let key in obj){
  let keystr=''
  for(let i=0;i<obj[key];i++){
    keystr+=key
  }
newObj[keystr]=obj[key]
}
console.log(newObj)
