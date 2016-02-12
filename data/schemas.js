var Joi = require('Joi');

var artiste =
    Joi.object().keys({
      _id: Joi.any(),
      nom: Joi.any(),
      nb_album: Joi.any(),
      href: Joi.any(),
      id: Joi.any()
    }).meta({className: 'artiste'});

var error =
    Joi.object().keys({
      statusCode: Joi.number().integer().required(),
      error: Joi.string().required()
    }).meta({className: 'error'});

var validationError =
    Joi.object().keys({
      statusCode: Joi.number().integer().required(),
      error: Joi.string().required(),
      message: Joi.string(),
      validation: Joi.object().keys({
        keys: Joi.array().items(Joi.string(), Joi.string()),
        source: Joi.string()
      }).meta({className: 'validationDetail'})
    }).meta({className: 'validationError'});

var paginate = function (item, name) {
  return Joi.object().keys({
    items: Joi.array().items(item),
    size: Joi.number().integer(),
    total: Joi.number().integer(),
    offset: Joi.number().integer(),
    limit: Joi.number().integer()
  }).meta({className: name});
};

exports = module.exports = {
  //models
  artiste: artiste,
  artistes: paginate(artiste, 'artistes'),
  error: error,
  validationError: validationError
};