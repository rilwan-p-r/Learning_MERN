// http method create server
// const http = require('http');

// const PORT = 3000;
// const server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('content-type','text/plain');
//     res.end('hello rilwan')
// })

// server.listen(PORT,()=>{
//     console.log(`server running on http://localhost:${PORT}/` )
// })

// expres method create server
// const express = require('express');
// const app = express();
// const port =5000
// app.get ('/',(req,res)=>{
//     res.send('hello machaaa')
// })
// app.listen(port,()=>{
//     console.log(`server running on ${port}`)
// })

// query using odd or even
// const express = require('express');
// const app = express();
// app.get('/addoreven',(req,res)=>{
//     const val = req.query.addoreven
//    if(val%2==0){
//     res.send('even')
//    }else{
//     res.send('odd')
//    }
// }).listen(5000)

// find sum by query
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   const val1 =parseInt(req.query.val1);
//   const val2 =parseInt(req.query.val2);
//   console.log(val1,val2)
  
//   const sum = val1 + val2;
//   console.log(sum);
//   res.send(sum.toString())
// }).listen(4000)

// find add or even  by params
const express = require("express");
const app = express();

app.get