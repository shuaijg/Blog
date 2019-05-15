const express = require('express');
const router = express.Router();
const db = require('../../db');

//查询
router.post('/query_article_content', function (req, res, next) {
    db.find("blog_article_content", req.body, function (err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

//保存
router.post('/save_article_content', function (req, res, next) {
    db.insertOne("blog_article_content", req.body, function (err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

//删除
router.post('/del_article_content', function (req, res, next) {
    db.deleteOne("blog_article_content", req.body, function (err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

//修改
router.post('/update_article_content', function (req, res, next) {
    console.log(req)
    db.updateOneById("blog_article_content", req.body._id, req.body, function (err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

module.exports = router;