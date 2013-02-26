'use strict';

app.service('nav', function Nav($rootScope, $route, $routeParams, $location, $timeout){
	var self = this;

	self.url = function(navLocation){
		$location.url(navLocation); 
	};
});
