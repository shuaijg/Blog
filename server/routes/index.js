const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.find("blog_admin", {}, function(err, data) {
        if (err) {
            console.log("Error:" + err)
            return
        }
        res.json(data)
    })
});

module.exports = router;