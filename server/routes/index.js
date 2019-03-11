const express = require('express');
const router = express.Router();
const mongo = require("mongodb").MongoClient;
const connect = require('../init');
const config = require('../dbConfig')

connect();   
/* GET home page. */
router.get('/', function(req, res, next) {
  mongo.connect('mongodb://' + config.mongodb.dbIp + ':' + config.mongodb.dbPort,function(err,database){
    const db = database.db(config.mongodb.dbName);
    db.collection("blog_admin").find().toArray(function(err,data){
    res.json(data);
    database.close();
   });
  });
});

module.exports = router;
