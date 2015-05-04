'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/users',
    config: {
      description: 'Creates a user',
      handler: function(request, reply){
        var user = new User(request.payload);
        user.save(function(){
          // user has finished saving
          if(user.errors){
            return reply(user.errors).code(400);
          }else{
            return reply(user);
          }
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'user.create'
};
