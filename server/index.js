const express=require('express')
const app=express();
const port=2000
const router=require('./router/customers')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/customers',router)

app.get('/api',(req,res)=>{
    res.send("hello mysql and node.js Express")
})






app.listen(port,(err)=>{
    if(err) return console.log(err)
    console.log(`listenPort ${port}`)
})