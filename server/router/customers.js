const express=require('express')
const app=express()
const mysql=require('../config/database')
let customers=express.Router()

customers.get('/',(req,res)=>{
        
        mysql.query(
                "SELECT * FROM CUSTOMER" ,(err,rows,fields)=>{
                        if(err)return console.log(err)
                        res.json(rows)
                })
                
        })

        
const multer=require('multer')
//업로트 파일이 저장되는 폴더 지정
const upload=multer({storage:multer.diskStorage({
        destination:"./server/images",
        filename:function(req,file,cb){
                cb(null,"imgfile"+Date.now()+file.originalname)
        }}),/*limits:{fileSize:10000000} 파일 크기 제한 단위는 byte*/ })


//중간에 fomdata를 캐치헤서 그중 image가 키값인 값을 캐치한다.
customers.post('/customerAdd',upload.single('image'),(req,res)=>{
        console.log(__dirname)
        let sql='INSERT INTO CUSTOMER VALUES(null,?,?,?,?,?)'
        let image='/images/'+req.file.filename
        let name=req.body.name
        let birthday=req.body.birthday
        let gender=req.body.gender
        let job=req.body.job
        let params=[image,name,birthday,gender,job]

        mysql.query(sql,params,(err,rows,field)=>{
                res.json(rows)
        })
        
})

module.exports=customers