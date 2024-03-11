var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    const xFromQuery = req.query.x;
    var x = xFromQuery || Math.random();
    var output = Math.abs(x);
    res.send(`Math.abs() applied to ${x} is ${output}`)
});

module.exports = router;
