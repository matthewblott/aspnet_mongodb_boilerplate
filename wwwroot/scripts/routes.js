var Backbone = require('backbone');
var views = require('./views');
var models = require('./models');

// N.B. The model names can be obtained with
// Object.getOwnPropertyNames(models)
// To iterate
// for(var obj in models) { }
// Do the same as above for views

module.exports.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'groups/:id': 'group',
    'home': 'home',
    'products': 'products',
    'products/:id': 'product',
    'users': 'users',
    'users/:id': 'user'
  },
  about: function() {
    new views.AboutView();
  },

  // Groups
  group: function(id) {
    var model = new models.Group({ _id: id });
    var view = new views.GroupView();

    view.render();

  },
  home: function() {
    var self = this;
    new views.HomeView();
  },
  products: function() {
    new models.Products().fetch({ success: function(data) {
      new views.ProductsView({ collection: data }).render();
    }});
  },
  product: function(id) {
    new models.Product({ _id: id }).fetch({ success: function(data) {
      new views.ProductView({ collection: data }).render();
    }});
  },
  users: function() {
    new models.Users().fetch({ success: function(data) {
      new views.UsersView({ collection: data }).render();
    }});
  },
  user: function(id) {
    new models.User({ _id: id }).fetch({ success: function(data) {
      new views.UserView({ collection: data }).render();
    }});

  }
});