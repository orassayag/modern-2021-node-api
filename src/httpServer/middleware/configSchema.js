const Joi = require('@hapi/joi');
const validate = require('./validate');

const configSchema = (req, res, next) => {
  const schema = Joi.object({
    a: Joi.string(),
    b: Joi.string(),
  });
  validate(req, next, schema);
};

module.exports = configSchema;
