////database connection
const mysql=require('mysql');

const connecting=mysql.createConnection({
    // host:"myaws.cf7smk2karlz.ap-northeast-2.rds.amazonaws.com",
    // user:"admin",
    // password:"dbswowls12!",
    host:"localhost",
    user:'root',
    password:"1234",
    port:"3306",
    database:"management"
})
//연결완료
connecting.connect();


//그리고 exports
module.exports=connecting