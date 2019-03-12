//const mongoose = require('mongoose')
const config = require('./dbConfig')
const MongoClient = require("mongodb").MongoClient
const DB = config.mongodb.dbName
const dbUrl = 'mongodb://' + config.mongodb.dbIp + ':' + config.mongodb.dbPort
const maxConnetTimes = 3

// const connect = () => {
//   return new Promise((resolve, reject) => {
//     //连接数据库
//     mongoose.connect(dbUrl)

//     //增加数据库连接的事件监听
//     mongoose.connection.on('disconnected',()=>{
//         //进行重连
//         mongoose.connect(dbUrl)
//     })

//     //数据库出现错误的时候
//     mongoose.connection.on('error',err=>{
//         console.log(err)
//         mongoose.connect(dbUrl)
//     })

//     //链接打开的时候
//     mongoose.connection.once('open',()=>{
//         console.log('MongoDB Connected successfully!')
//         resolve()
//     })
//   })
// }
// module.exports = connect

function _connectDB(callback) {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, function(err, db) {
    console.log("连接成功！");
    callback(err, db)
  })
}

// 插入一个文档数据
module.exports.insertOne = function (collection, data, callback) {
  _connectDB(function (err, db) {
      if (err) throw err
      var database = db.db(DB)
      database.collection(collection).insertOne(data, function (err, result) {
          callback(err, result)
          db.close()
      })
  })
}
// 插入多个文档数据，传入的data必须为数组
module.exports.insert = function (collection, data, callback) {
  _connectDB(function (err, db) {
      if (err) throw err
      let database = db.db(DB)
      if (!(data instanceof Array)) {
          throw new Error('请使用数组传入多个数据，或者调用Insert添加单个数据')
      }
      if (data.length === 0) {
          throw new Error('禁止插入空数组')
      } 
      database.collection(collection).insertMany(data, function(err, result) {
          callback(err, result)
          db.close()
      })
  })
}
// 删除单个数据
module.exports.deleteOne = function (collection, condition, callback) {
  _connectDB(function (err, db) {
      if (err) throw err
      let database = db.db(DB)
      database.collection(collection).deleteOne(condition, function (err, result) {
          callback(err, result)
          db.close()
      })
  })
}
// 删除多个数据
module.exports.delete = function (collection, condition, callback) {
  _connectDB(function (err, db) {
      if (err) throw err
      let database = db.db(DB)
      database.collection(collection).deleteMany(condition, function (err, result) {
          callback(err, result)
          db.close()
      })
  })
}
// 查询数据，condition为{}时可以查询该集合下的所有文档
module.exports.find = function (collection, condition, callback) {
  _connectDB(function (err, db) {
      if (err) throw err
      let database = db.db(DB)
      database.collection(collection).find(condition).toArray(function (err, result) {
          callback(err, result)
          db.close()
      })
  })
}
