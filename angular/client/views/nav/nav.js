'use strict';

angular.module('beerfriend')
.controller('NavCtrl', function($rootScope, $scope, $state, User, $http){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
      $rootScope.authToken = data.token;
      $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
    }else{
      $rootScope.activeUser = null;
      $rootScope.authToken = null;
      $http.defaults.headers.common.Authorization = null;
    }

    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        return data.password.email.substring(0, data.password.email.indexOf('@'));
      case 'github':
        return data.github.displayName;
    }

  }

});
