var schemas = require('../data/schemas.js');

       /* function Collection(items) {
            this.items = items;
            this.size = this.items.length;
        }*/

routes = [
   {
    method: 'GET',
    path: '/artistes/export',
    handler: function (req, reply) {
      
    var db = global.db;
    var query = db.userlist.chain();
    console.log(query);
    var collection = db.get('userlist');


     collection.find({},{},function(err, docs) {
       reply(docs);
    });

  /*  collection.find({},{},function(e,docs){
      //var Joi = require('Joi');
      //Joi.assert(docs, schemas.artiste);
      var collection = new Collection(docs);
      reply(collection);

       //reply(docs);
    });*/

    },
    config: {
      response: {
        schema: schemas.error,
        status: {
          200: schemas.artiste,
          400: schemas.validationError
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/artistes/{id}',
    handler: function (req, reply) {
      var db = global.db;
      var collection = db.get('userlist');
      collection.findOne({'id' : req.params.id}, function (err, doc) {
        console.log(doc);
        reply(doc);
      });
    },
    config: {
      description: 'get artiste by id',
      tags: ['api', 'artistes'],
      response: {
        schema: schemas.error,
        status: {
          200: schemas.artiste,
          404: schemas.error
        }
      }
    }
  }
];

exports.routes = function (server) {
  server.route(routes);
};
