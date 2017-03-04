(function() {

	'use strict';

	angular.module("Simulation", [
		'services.simulation'
	])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) 
	{

		$stateProvider

			.state({

				name:'simulation',
				url:'/simulation',
				template:"<div >{{jobs}}</div>",
				controller:function($scope,SimulationService)
	          	{	
	          		SimulationService.set();
	          		$scope.jobs = SimulationService.get();
				}

			});

	});

})();
