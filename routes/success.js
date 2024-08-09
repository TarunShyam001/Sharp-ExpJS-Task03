const path = require('path');

const express = require('express');

const router = express.Router();

const routeDir = require('../util/path');

router.get('/success', (req, res)=>{
    res.sendFile(path.join(routeDir, 'views', 'success.html'));
})

module.exports = router;