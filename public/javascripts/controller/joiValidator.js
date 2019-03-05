'use strict';
const Joi = require('joi')

exports.validate_input = function(req, res) {
  const schema = {
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required()
  };

  const joiResult = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(500).json({
      error : joiResult.error.details[0].message
    })
  } else {
    res.status(200).json({
      msg : "Success"
    })
  }
};
