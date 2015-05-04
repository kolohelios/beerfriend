'use strict';

angular.module('beerfriend')
.factory('Profile', function($http, nodeUrl){

  function Profile() {}

  Profile.update = function(profile){
    $http.post(nodeUrl + '/users', profile)
      .success(function(response){
        console.log(response);
      })
      .error(function(error){
        console.log(error);
      });
  };


  return Profile;

});
