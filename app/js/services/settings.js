'use strict';

app.service('settings', function Settings(localStorage){
	var self = this;

	self.userType = 'administrator';
	self.userListPointer = 0;
	
});
