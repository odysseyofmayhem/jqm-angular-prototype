var app = angular.module('jqm_protoype', []);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $routeProvider
    .when('/', {
      templateUrl:'#home',
      jqmOptions: { transition: 'slide' }
    })
    .when('/info', {
      templateUrl:'#info',
      jqmOptions: { transition: 'pop' }
    })

    .when('/form', {
      templateUrl:'#form',
      hasChildren: '/form',
      jqmOptions: { transition: 'slide' }
    })
    .when('/form/settings', {
      templateUrl:'#form_settings',
      childOf: '/form',
      jqmOptions: { transition: 'slide' }
    })

    .when('/list', {
      templateUrl:'#list',
      jqmOptions: { transition: 'slide' }
    })
    .when('/list/:recordId', {
      templateUrl:'#list_detail',
      jqmOptions: { transition: 'slide' }
    })
    
    .otherwise({
      redirectTo:'/'
    });
});

app.controller('MainCtrl', function ($scope, $location, $rootScope) {
  $scope.back = function() {
    window.history.back();
  };

  $scope.isActive = function(route) {
      if(route === $location.path() || $location.path().indexOf(route) > -1) return true;

      return false;
    }

});

function RootCtrl($scope, $route, $routeParams, $location, $timeout) {

}