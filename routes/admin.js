const path = require('path');

const express = require('express');

const routeDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET Request
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(routeDir, "views", "add-product.html"));
});

// /admin/add-product => POST Request
router.post('/add-product', (req, res, next)=>{
    console.log(`item name = ${req.body.title}`);
    console.log(`number of items = ${req.body.size}`);
    res.redirect('/');
});

module.exports = router;