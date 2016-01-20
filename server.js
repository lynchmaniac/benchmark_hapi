
var bodyParser = require('body-parser');

const Hapi = require('hapi');

// Database
var mongo = require('mongodb');
var monk = require('monk');
global.db = monk(process.argv[2]);








/**
 * Create HTTP server.
 */


const server = new Hapi.Server();

server.connection({
  port: 8080,
  routes: {
    cors: true,
    validate: {
      options: {
        abortEarly: false
      }
    }
  }
});


server.register(
  [
    {
      register: require('hapi-routes'),
      options: {dir: 'routes'}
    },
  ],
  function (err) {
    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start(function () {
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  }
);