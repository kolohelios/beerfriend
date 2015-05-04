'use strict';

angular.module('beerfriend')
.controller('ProfilesCtrl', function($scope, Profile){

  $scope.saveProfile = function(profile){
    Profile.update(profile);
  };

});
