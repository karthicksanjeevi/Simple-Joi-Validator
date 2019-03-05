var express = require('express');
var router = express.Router();
const joiValidatorController = require('../public/javascripts/controller/' +
  'joiValidator');

router.get('/api/joi/validateMyInput',
  joiValidatorController.validate_input)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
