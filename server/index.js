const express=require('express')
const app=express();
const port=2000
const router=require('./router/customers')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//이미지 파일이 불러지는 위치를 체인지
app.use('/images',express.static(__dirname+'/images'))
app.use('/api/customers',router)

app.get('/api',(req,res)=>{
    res.send("hello mysql and node.js Express")
})






app.listen(port,(err)=>{
    if(err) return console.log(err)
    console.log(`listenPort ${port}`)
})