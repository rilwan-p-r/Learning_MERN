let express = require('express')
let app = express()

app.get('/',(req,res)=>{
    let val=req.query.value
    if(val%2===0){
        res.send('even')
    }else{
        res.send('odd')
    }
})
app.listen(5000,()=>{
    console.log('server started')
})
