(function() {

	'use strict';

	angular.module("SimApp", [
		'ui.router',
		'Simulation'
	])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) 
	{

		$urlRouterProvider.otherwise("/");

		$stateProvider

			.state({

				name:'root',
				url:'/',
				template:"<div>{{dude}}</div>",
				controller:function($scope)
	          	{	
	          		$scope.dude = 'easy as pie';
				}

			});

	});

})();
