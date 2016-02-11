var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Johns Family' });
});

router.get('/mom', function(req, res, next) {
  res.render('mom', { 
  	title: 'Mom',
  	job: "Retired",
  	birthday: "July 1" });
});
router.get('/dad', function(req, res, next) {
  res.render('dad', { 
  	title: 'Dad',
  	job: "Marketing",
  	birthday: "October 17" });
});
router.get('/john', function(req, res, next) {
  res.render('john', { 
  	title: 'John',
  	job: 'Web Dev',
  	birthday: 'August 18' });
});
router.get('/scott', function(req, res, next) {
  res.render('scott', { 
  	title: 'Scott',
  	job: 'caddy',
  	birthday: 'January 23' });
});
module.exports = router;
