//const mongoose = require('mongoose')
const config = require('./dbConfig')
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require("mongodb").MongoClient
const DB = config.mongodb.dbName
const dbUrl = 'mongodb://' + config.mongodb.dbUserName + ':' + config.mongodb.dbPassword + '@' + config.mongodb.dbIp + ':' + config.mongodb.dbPort
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
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
    if (err) { 
      console.log("连接失败!")
      console.log(err.errmsg)
      throw err
    }
    console.log("连接成功!");
    callback(err, db)
  })
}
/**********************添加**************************************/
// 插入一个文档数据
module.exports.insertOne = function (collection, data, callback) {
  _connectDB(function (err, client) {
      if (err) throw err
      let db = client.db(DB)
      db.collection(collection).insertOne(data, function (err, result) {
          callback(err, result)
          client.close()
      })
  })
}
// 插入多个文档数据，传入的data必须为数组
module.exports.insert = function (collection, data, callback) {
  _connectDB(function (err, client) {
      if (err) throw err
      let db = client.db(DB)
      if (!(data instanceof Array)) {
          throw new Error('请使用数组传入多个数据，或者调用Insert添加单个数据')
      }
      if (data.length === 0) {
          throw new Error('禁止插入空数组')
      } 
      db.collection(collection).insertMany(data, function(err, result) {
          callback(err, result)
          client.close()
      })
  })
}
/**********************总数**************************************/
//根据条件查找记录数
module.exports.count = function (collection,whereObj,callback) { 
  _connectDB(function (err, client) {
    if (err) throw err
    let db = client.db(DB)
    db.collection(collection).count(whereObj).then(function(count) {
      callback(count)
    })
  });
},
  /**********************修改**************************************/
// 修改多个文档数据，传入的data必须为数组
module.exports.update = function (collection, whereObj, upObj, callback) {
    _connectDB(function (err, client) {
        if (err) throw err
        let db = client.db(DB)
        if (!(data instanceof Array)) {
            throw new Error('请使用数组传入多个数据，或者调用Update添加单个数据')
        }
        if (data.length === 0) {
            throw new Error('禁止插入空数组')
        }
      db.collection(collection).updateMany(whereObj, upObj, function (err, result) {
            callback(err, result)
            client.close()
        })
    })
}
// 修改单个文档数据
module.exports.updateOne = function (collection, whereObj, upObj, callback) {
    _connectDB(function (err, client) {
        if (err) throw err
        let db = client.db(DB)
        db.collection(collection).updateOne(whereObj,upObj, function (err, result) {
            callback(err, result)
            client.close()
        })
    })
}
// 根据id修改一条记录
module.exports.updateOneById = function (collection, id, upObj, callback) {
    _connectDB(function (err, client) {
        if (err) throw err
      let db = client.db(DB)
      delete upObj._id;
      upObj = { $set: upObj };
      db.collection(collection).updateOne({_id:ObjectID(id)}, upObj, function (err, result) {
            callback(err, result)
            client.close()
        })
    })
}
/**********************删除**************************************/
// 删除单个数据
module.exports.deleteOne = function (collection, whereObj, callback) {
  _connectDB(function (err, client) {
      if (err) throw err
    let db = client.db(DB)
      db.collection(collection).deleteOne({_id:ObjectID(whereObj._id)}, function (err, result) {
          callback(err, result)
          client.close()
      })
  })
}
// 删除多个数据
module.exports.delete = function (collection, whereObj, callback) {
  _connectDB(function (err, client) {
      if (err) throw err
      let db = client.db(DB)
      db.collection(collection).deleteMany(whereObj, function (err, result) {
          callback(err, result)
          client.close()
      })
  })
}
/**********************查询**************************************/
//查找一条记录
module.exports.findOne = function (collection,whereObj,callback) { 
  _connectDB(function (err, client) {
      if (err) throw err
      let db = client.db(DB)
      db.collection(collection).findOne(whereObj, function (err, result) {
          callback(err, result)
          client.close()
      })
  })
}
//根据id来查找记录
module.exports.findOneById = function (collection,id,callback) { 
  _connectDB(function (err, client) {
      if (err) throw err
      let db = client.db(DB)
    db.collection(collection).findOne({_id:mongodb.ObjectId(id)}, function (err, result) {
          callback(err, result)
          client.close()
      })
  })
}
 /*查找
  * collection： 集合
  * obj:
  * whereObj: 条件， 默认是 {}
  * sortObj: 排序， 默认是 {}
  * limit: 显示提定条数, 默认是0 
  * skip: 跳过指定条数， 默认是0 
  * */
module.exports.find = function (collection, obj, callback) {
  //如果有条件，将条件赋值给obj.whereObj,没有传条件默认为{}
  obj.whereObj = obj.whereObj || {};
  obj.sortObj = obj.sortObj || {};
  obj.limit = obj.limit || 0;
  obj.skip = obj.skip || 0;
  _connectDB(function (err, client) {
      if (err) throw err
      let db = client.db(DB)
    db.collection(collection)
      .find(obj.whereObj)
      .sort(obj.sortObj)
      .limit(obj.limit)
      .skip(obj.skip)
      .toArray(function (err, result) {
          callback(err, result)
          client.close()
      })
  })
}
