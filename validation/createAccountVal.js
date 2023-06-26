const Joi = require('joi');

const createAccountSchema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().positive().required()

});

module.exports = createAccountSchema;