const express = require('express')
const app = express()
// 模型对象
const models = require('../models')

// Sequlize promise
// 新建用户
app.post('/create', async (req, res) => {
  const { name } = req.query
  const user = await models.User.create({
    firstName: name
  })
  res.json({
    message: '创建成功',
    user
  })
})

// 获取列表
app.get('/list', async (req, res) => {
  const list = await models.User.findAll()
  res.json({
    list
  })
})

// 获取详情
app.get('/detail/:id', async (req, res) => {
  const { id } = req.params
  const detail = await models.User.findOne({
    where: { id }
  })
  res.json({
    detail
  })
})

// 根据id删除用户
app.post('/delete/:id', async (req, res) => {
  const { id } = req.params
  const user = await models.User.destroy({
    where: { id }
  })
  res.json({
    message: '操作成功'
  })
})

app.listen('3000', () => {
  console.log('服务器连接成功')
})
