const express = require('express');
const router = express.Router();
const db = require('../../db');

/* Post article page. */
router.post('/article_content', function (req, res, next) {
    db.find("blog_article_content", req.body, function (err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

module.exports = router;