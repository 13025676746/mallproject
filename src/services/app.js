const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const excuteSql = require('./database')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  next()
})
app.use((req, res, next) => {
  if (req.path == '/api/login' || req.path == '/api/register') return next()
  const token = req.headers.authorization
  if (!token) return res.send('身份验证不通过')
  try{
    const userInfo = jwt.verify(token, 'testtoken')
    excuteSql(`select * from user where id='${userInfo.id}' and username='${userInfo.username}'`,(err,data)=>{
      if(!data[0]) return res.send('用户不存在，请前往注册')
      next()
    })
  }catch(e){
    return res.send('身份验证已过期，请重新登录')
  }
})
app.use(router)
app.listen(3000, () => {
  console.log('service is running in port 3000')
})

