const Joi = require('joi');

const transferSchema = Joi.object({
  from: Joi.string().required(),
  to: Joi.string().required(),
  amount: Joi.number().positive().required()
});

module.exports = transferSchema;