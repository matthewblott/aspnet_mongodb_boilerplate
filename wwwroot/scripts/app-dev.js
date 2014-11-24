var Backbone = require('backbone'),
  routes = require('./routes'),
  router = new routes.Router();

Backbone.history.start({ pushState: false });