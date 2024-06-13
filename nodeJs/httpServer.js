// const http =require('http')
let port =5000
// const server = http.createServer((req,res)=>{
//     // res.setHeader('content-type','text/plain')
//     res.write('helooo')
//     res.end()
// })
// server.listen(port,()=>{
//     console.log('server started')
// })
const express = require('express')
const app  = express()
app.get('/:value',(req,res)=>{
    let val  = req.params.value
    console.log(val);
    if(val%2===0){
        res.send('its even number')
    }else{
        res.send('its odd number')
    }
})
app.listen(port,()=>{
    console.log('server started')
})