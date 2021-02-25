////database connection
const mysql=require('mysql');

const connecting=mysql.createConnection({
    // host:"myaws.cf7smk2karlz.ap-northeast-2.rds.amazonaws.com",
    // user:"admin",
    // password:"dbswowls12!",
    host:"us-cdbr-east-03.cleardb.com",
    user:'b12d0cdac395f7',
    password:"92f4f08b",
    database:"heroku_a5bf4153d4f0a48"
})
//연결완료
connecting.connect();

// mysql://b12d0cdac395f7:92f4f08b@us-cdbr-east-03.cleardb.com/heroku_a5bf4153d4f0a48?reconnect=true
//그리고 exports
module.exports=connecting