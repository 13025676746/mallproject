const mysql =require('mysql')

module.exports=function executeSql(sql,callback) {
  const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'5201314wzc',
    database:'mallproject'
  })
  connection.connect()
  connection.query(sql,(err,data,fields)=>{
    callback(err,data)
  })
  connection.end()
}