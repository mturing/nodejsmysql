var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wocao' });
});
router.get('/test', function(req,res,next) {
	console.log("this is test");
	res.render('test', { title: 'tang' });
});
router.get('/testmy', function(req,res,next) {
	console.log("this is mysql test");
	userDao.add(req, res, next);
});
module.exports = router;
