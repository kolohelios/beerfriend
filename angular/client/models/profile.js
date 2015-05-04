'use strict';

angular.module('beerfriend')
.factory('Profile', function($http, nodeUrl){

  function Profile() {}

  Profile.update = function(){
    $http.put(nodeUrl + '/users').
      success(function(response){
        console.log(response);
      }).
      error(function(error){
        console.log(error);
      });
  };


  return Profile;

});
