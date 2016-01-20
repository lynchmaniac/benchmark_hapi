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

exports = module.exports = {
  //models
  artiste: artiste,
  error: error
};