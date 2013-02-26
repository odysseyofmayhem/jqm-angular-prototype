var app = angular.module('jqm_protoype', []);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $routeProvider
    .when('/', {
      templateUrl:'/views/home.html',
      jqmOptions: { transition: 'slide' }
    })
    .when('/info', {
      templateUrl:'/views/info.html',
      jqmOptions: { transition: 'pop' }
    })

    .when('/form', {
      templateUrl:'/views/form.html',
      hasChildren: '/form',
      jqmOptions: { transition: 'slide' }
    })
    .when('/form/settings', {
      templateUrl:'/views/form_settings.html',
      childOf: '/form',
      jqmOptions: { transition: 'slide' }
    })

    .when('/list', {
      templateUrl:'/views/list.html',
      jqmOptions: { transition: 'slide' }
    })
    .when('/list/:recordId', {
      templateUrl:'/views/list_detail.html',
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