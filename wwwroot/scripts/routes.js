var Backbone = require('backbone');
var views = require('./views');
var models = require('./models');

module.exports.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'home': 'home',
    'about': 'about',
    'users': 'users',
    'users/:id': 'user'
  },
  home: function() {
    new views.HomeView();
  },
  about: function() {
    new views.AboutView();
  },
  users: function() {

    var users = new models.Users();

    users.fetch({ success: function(data) {
      var usersView = new views.UsersView({ collection: data });

      usersView.render();
      
    }});

  },
  user: function(id) {

    var user = new models.User({ _id: id });

    user.fetch({ success: function(data) {
      var userView = new views.UserView({ collection: data });

      userView.render();
      
    }});

  }

});