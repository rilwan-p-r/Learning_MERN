const { error } = require('console');
const fs = require('fs')

fs.readFile('./text.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
fs.writeFile('./text1.txt','game of throne has burnedsss',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('file has created');
    }
})
fs.unlink('./text1.txt',(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('file has deleted');
    }
})