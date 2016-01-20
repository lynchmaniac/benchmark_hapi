var schemas = require('../data/schemas.js');

routes = [
   {
    method: 'GET',
    path: '/artistes/{id}',
    handler: function (req, reply) {
      
      var db = global.db;
      var collection = db.get('userlist');
      collection.findOne({'_id' : req.params.id}, function (err, doc) {
        reply(doc);
      });

    },
    config: {
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
