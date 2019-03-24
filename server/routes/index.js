const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET home page. */
router.post('/', function(req, res, next) {
    db.find("blog_admin", req.body, function(err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

module.exports = router;