const express = require('express')
// 创建router对象
const route = express.Router();

route.get('/info', (req, res) => {
  res.send(require('../data/students.json'))
});

module.exports = route;