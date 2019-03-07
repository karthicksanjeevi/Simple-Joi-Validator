'use strict';
const Joi = require('joi')

exports.validate_location_input = function(req, res) {
  // Validate the Location using following schema
  const schema = {
    latitude: Joi.number().min(-90).max(90).required(),
    longitude: Joi.number().min(-180).max(180).required()
  };

  const joiResult = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(500).json({
      error: joiResult.error.details[0].message
    })
  } else {
    res.status(200).json({
      msg: "Success"
    })
  }
};


exports.validate_timestamp_input = function(req, res) {
  //Convert the String Coming from Client Side to Valid Timestamp Object
  req.body.start_timestamp = new Date(req.body.start_timestamp);
  req.body.end_timestamp = new Date(req.body.end_timestamp);

  const schema = {
    start_timestamp: Joi.date().timestamp().required(),
    end_timestamp: Joi.date().timestamp().required()
  };

  const joiResult = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(500).json({
      error: joiResult.error.details[0].message
    })
  } else {
    res.status(200).json({
      msg: "Success"
    })
  }
};

exports.validate_number_input = function(req, res) {
  // Here I have made 1 Field as mandatory and other as not mandatory
  // It is explained by the keyword "required" below
  const schema = {
    step_count: Joi.number().required(),
    counter: Joi.number()
  };

  const joiResult = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(500).json({
      error: joiResult.error.details[0].message
    })
  } else {
    res.status(200).json({
      msg: "Success"
    })
  }
};

exports.validate_gender_input = function(req, res) {
  // If you want to restrict the number of character's sent as string
  // then use the following Joi constraint.
  // Assume if you will allow only (M, F, O) in your gender column in your
  // Then follow the following method
  const schema = {
    gender: Joi.string().max(1)
  };

  const joiResult = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(500).json({
      error: joiResult.error.details[0].message
    })
  } else {
    res.status(200).json({
      msg: "Success"
    })
  }
};


exports.validate_array_input = function(req, res) {
  // If we want to send an array of elements and need to validate all
  // the elements in an array with joi then follow the below method
  for (var i = 0; i < req.body.records.length; i++) {
    req.body.records[i].dob =
      new Date(req.body.records[i].dob);
  }
  const schema = {
    some_update: Joi.boolean().valid(true).required(),
    records: Joi.array().when('some_update', {
      is: true,
      then: Joi.array().items({
        name: Joi.string().required(),
        id: Joi.number().required(),
        dob: Joi.date().timestamp()
      })
    })
  };

  const joiResult = Joi.validate(req.body, schema);
  if (joiResult.error) {
    res.status(500).json({
      error: joiResult.error.details[0].message
    })
  } else {
    res.status(200).json({
      msg: "Success"
    })
  }
};
