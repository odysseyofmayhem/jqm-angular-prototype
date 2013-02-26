'use strict';

function listCtrl($scope, $rootScope, nav, settings, users) {
	$scope.nav = nav.url;
	$scope.settings = settings;
	$scope.users = users;

	$scope.selectRecord = function(index, userId){
		$scope.users.pointer = index;
		$scope.nav('/list/'+userId);
	}


}