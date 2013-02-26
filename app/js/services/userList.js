'use strict';

app.service('users', function Users(){
	var self = this;

	self.pointer = 0;
	self.dataSet = [
		{	id	: 1,
			firstname	: 'Lee',
			lastname	: 'McNeil',
			location	: 'Edinburgh',
			rate		: '50/hr'
		},
		{	id	: 2,
			firstname	: 'Gordon',
			lastname	: 'McLean',
			location	: 'Hamble',
			rate		: '100/hr'
		},
		{	id	: 3,
			firstname	: 'Bruce',
			lastname	: 'Jigalo',
			location	: 'Las Vagas',
			rate		: '30/hr'
		},
		{	id	: 4,
			firstname	: 'Clark',
			lastname	: 'Kent',
			location	: 'Metropolis',
			rate		: '5/hr'
		},
	];

	self.setPointer = function(newIndex){
		self.pointer = newIndex;
	}
	self.getPointer = function(){
		return self.pointer;
	}
});
