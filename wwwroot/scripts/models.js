var Backbone = require('backbone'),
  handlebars = require('handlebars'),
  origin = window.location.origin + '/api/';

  Backbone.$ = require('zepto-browserify').$;

// Users
module.exports.User = Backbone.Model.extend({
  initialize: function() {
    this.on('change:name', function(){
      console.log('Name changed');
    });
  },
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: ''
  },
  validate: function(attrs){
    if(!attrs.firstName){
      return 'First name required';
    }
  },
  url: function (){
    return origin + 'user/' + this.id;
  },
  save: function(attrs, options) {
    // this.save();
    // implement an event to watch for save and reroute back to the users view
    Backbone.Model.prototype.save.call(this, attrs, options);
    console.log('saved');
  }
});

module.exports.Users = Backbone.Collection.extend({
  model: module.exports.User,
  url: origin + 'user/'
});

// Products
module.exports.Product = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: '',
    description: ''
  },
  validate: function(attrs){
    if(!attrs.name){
      return 'Name required';
    }
  },
  url: function (){
    return origin + 'product/' + this.id;
  },
  save: function(attrs, options) {
    Backbone.Model.prototype.save.call(this, attrs, options);
  }
});

module.exports.Products = Backbone.Collection.extend({
  model: module.exports.Product,
  url: origin + 'product/'
});

// Groups
module.exports.Group = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: ''
  },
  url: function (){
    return origin + 'group/' + this.id;
  }
});