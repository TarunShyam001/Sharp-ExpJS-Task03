const path = require('path');

const express = require('express');

const router = express.Router();

const routeDir = require('../util/path');

// /admin/add-product => GET Request
router.get('/contact-us',(req, res, next)=>{
    res.sendFile(path.join(routeDir, "views", "contact-us.html"));
});

// /admin/add-product => POST Request
router.post('/contact-us', (req, res, next)=>{
    console.log(`username : ${req.body.username}`);
    console.log(`email Id : ${req.body.email}`);
    console.log(`problem is : ${req.body.problem}`)
    res.redirect('/success');
});

module.exports = router;