var Backbone = require('backbone'),
  Handlebars = require('handlebars'),
  $ = require('zepto-browserify').$;

var placeholder = '#mainView';

module.exports.UserView = Backbone.View.extend({
  render: function() {
    
    var self = this;
    var item = self.collection;

    // for debugging
    window.item = item;

    var template = require('./views/user.html');

    self.$el.html(template({'user': item.toJSON()}));

    self.$el.find('button').on('click', function (e) {
      item.set('firstName', self.$el.find('#firstName').val());
      item.set('lastName', self.$el.find('#lastName').val());
      item.save();
    });

    return self;

  },
  el: placeholder
  
});

module.exports.UsersView = Backbone.View.extend({
  render: function() {
    
    var self = this;

    var template = require('./views/users.html');
    var output = template({'users': self.collection.toJSON()});

    self.$el.html(output);

    //$(placeholder + ' a').on('click', function (e) {
    //  var id = Number.parseInt(e.currentTarget.innerText);
    //});

    return self;

  },
  el: placeholder
  
});

module.exports.HomeView = Backbone.View.extend({
  initialize: function(){
    var self = this;

    self.$el.html(require('./views/home.html')());

    return self;
  },
  // render: function(){ },
  el: placeholder
  
});

module.exports.AboutView = Backbone.View.extend({
  initialize: function(){
    this.$el.html(require('./views/about.html')());
  },
  el: placeholder
  
});