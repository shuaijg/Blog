const express = require('express');
const router = express.Router();
const db = require('../../db');

/* Post login page. */
router.post('/login', function(req, res, next) {
    db.find("blog_admin", req.body, function(err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

/* get menu page. */
router.get('/menu', function (req, res, next) {
    db.find("blog_menu", {}, function (err, data) {
        if (err) {
            console.log("Error:" + err)
            return res;
        }
        res.json(data)
    })
});

module.exports = router;