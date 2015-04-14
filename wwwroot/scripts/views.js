var Backbone = require('backbone'),
  Handlebars = require('handlebars'),
  $ = require('zepto-browserify').$;

var placeholder = '#mainView';
var groupTemplate = require('./views/group.html')();

var ModelView = Backbone.View.extend({
  viewName: 'group',
  render: function() {
    
    var self = this;
    // self.$el.html(template({'model': self.collection.toJSON()}));
    self.$el.html(groupTemplate);

    return self;

  },
  el: placeholder

});

var CollectionView = Backbone.View.extend({ });
// module.exports.SomeView = BaseView.extend({ });

// About
module.exports.AboutView = Backbone.View.extend({
  initialize: function(){
    this.$el.html(require('./views/about.html')());
  },
  el: placeholder
  
});


// Groups
module.exports.GroupView = ModelView.extend({

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

// Products
module.exports.ProductView = Backbone.View.extend({
  render: function() {
    
    var self = this;
    var item = self.collection;
    var template = require('./views/product.html');

    self.$el.html(template({'product': item.toJSON()}));

    self.$el.find('button').on('click', function (e) {
      item.set('name', self.$el.find('#name').val());
      item.set('description', self.$el.find('#description').val());
      item.save();
    });

    return self;

  },
  el: placeholder
  
});

module.exports.ProductsView = Backbone.View.extend({
  render: function() {
    
    var self = this;
    var template = require('./views/products.html');
    var output = template({'products': self.collection.toJSON()});

    self.$el.html(output);

    return self;

  },
  el: placeholder
  
});

// Users
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