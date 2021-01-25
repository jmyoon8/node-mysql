const express=require('express')
let customers=express.Router()

customers.get('/',(req,res)=>{


        res.json([
                {id:"jm",img:"http://placeimg.com/50/50/any",name:"YoonJaeJin",birth:"19910812",gender:"male",job:"developer"},
                {id:"jj",img:"http://placeimg.com/50/50/any",name:"YoonJaeMin",birth:"1991018",gender:"male",job:"developer"},
                {id:"jj",img:"http://placeimg.com/50/50/any",name:"YoonJaeMin",birth:"1991018",gender:"male",job:"developer"}
              ])
})

module.exports=customers