var express = require('express');
var router = express.Router();
var search = require('./search-definitions/search')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET a specific search. */
router.get('/search/:folder', function(req, res, next) {
  search()
    res.render('index', { title: 'Express' });
});

module.exports = router;
