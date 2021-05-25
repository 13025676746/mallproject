const express = require('express')
const excuteSql = require('./database')
const jwt =require('jsonwebtoken')
const md5 = require('blueimp-md5')

const router = express.Router()

router.post('/api/register', ((req, res) => {
  excuteSql(`select * from user where username='${req.body.username}'`, (err, data) => {
    if (data[0]) return res.send('用户名已存在')
    const password=md5(md5(req.body.password))
    excuteSql(`insert into user (username,password) 
                  value ('${req.body.username}','${password}')`, (err, data) => {
      res.send('注册成功')
    })
  })
}))

router.post('/api/login', ((req, res) => {
  const password=md5(md5(req.body.password))
  excuteSql(`select * from user 
  where username='${req.body.username}' 
  and password='${password}'`, (err, data) => {
    if(!data[0]) return res.send('用户名或密码错误')
    const token = jwt.sign({
      id:data[0].id,
      username:data[0].username
    },'testtoken',{
      expiresIn: '90min'
    })
    res.send({
      id: data[0].id,
      username:data[0].username,
      token:token
    })
  })
}))

router.post('/api/cart/add',((req, res) => {
  const body=req.body
  excuteSql(`insert into cart (iid,userid,shopLogo,shopName,img,title,descri,price,number,isSelect) values 
  ('${body.iid}',${body.userid},'${body.shopLogo}','${body.shopName}','${body.img}','${body.title}',
  '${body.desc}',${body.price},${body.number},'${body.isSelect}')`, (err,data)=>{
    res.send('添加成功')
  })
}))

router.post('/api/cart/number/update',(req,res)=>{
  excuteSql(`update cart set number=number+1 where iid='${req.body.iid}' and userid=${req.body.userid}`,
      (err,data)=>{
    res.send('更新成功')
  })
})

router.post('/api/cart/select/update',(req,res)=>{
  console.log(req.body.isSelect)
  console.log(`update cart set isSelect='${req.body.isSelect}' where iid='${req.body.iid}' and userid=${req.body.userid}`)
  excuteSql(`update cart set isSelect='${req.body.isSelect}' where iid='${req.body.iid}' and userid=${req.body.userid}`,
      (err,data)=>{
    res.send('更新成功')
  })
})

router.post('/api/cart/all/select/update',(req,res)=>{
  console.log(req.body.isSelectAll)
  console.log(`update cart set isSelect='${req.body.isSelectAll}' where userid=${req.body.userid}`)
  excuteSql(`update cart set isSelect='${req.body.isSelectAll}' where userid=${req.body.userid}`,
      (err,data)=>{
    res.send('更新成功')
  })
})

router.post('/api/cart/query',(req,res)=>{
  const userid=req.body.userid
  excuteSql(`select * from cart where userid=${userid}`,(err,data)=>{
    res.send(data)
  })
})

router.post('/api/cart/delete',(req,res)=>{
  const userid=req.body.userid
  const iid=req.body.iid
  console.log(`delete from cart where userid=${userid} and iid='${iid}'`)
  excuteSql(`delete from cart where userid=${userid} and iid='${iid}'`,(err,data)=>{
    res.send('删除成功')
  })
})

module.exports = router
