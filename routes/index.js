var express = require('express');
var router = express.Router();
const joiValidatorController = require('../public/javascripts/controller/' +
  'joiValidator');

router.get('/api/joi/validateLocationInput',
  joiValidatorController.validate_location_input);

router.get('/api/joi/validateTimestampInput',
  joiValidatorController.validate_timestamp_input);

router.get('/api/joi/validateNumberInput',
  joiValidatorController.validate_number_input);

router.get('/api/joi/validateGenderInput',
  joiValidatorController.validate_gender_input);

router.get('/api/joi/validateArrayInput',
  joiValidatorController.validate_array_input);






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;
