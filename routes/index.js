var express = require('express');
var router = express.Router();
var math = require('./math');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Giovanni Grecos Page' });
});
router.get('/api/add', function(req, res, next) {
var n1 = req.query.n1;
var n2 = req.query.n2;
res.json(math.add(n1,n2));
});
module.exports = router;
