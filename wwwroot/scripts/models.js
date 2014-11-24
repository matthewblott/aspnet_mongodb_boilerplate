var Backbone = require('backbone'),
  handlebars = require('handlebars'),
  origin = window.location.origin + '/api/';

  Backbone.$ = require('zepto-browserify').$;

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
    console.log('User saved');
  }
});

module.exports.Users = Backbone.Collection.extend({
  model: module.exports.User,
  url: origin + 'user/'
});
