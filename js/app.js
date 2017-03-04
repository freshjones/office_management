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

(function() {

    'use strict';

    function SimulationService()
    {
        var config={},data,sim = {};

        config.years    = 1000;
        config.months   = 12;
        config.jobs     = 5;

        sim.set = function()
        { 

            var total = config.jobs * (config.months * config.years);

            data = total / config.years;
            
            /*
            var i;
            for(i=1;i<=config.years;i++)
            {
                var test
                console.log();
                data.push(i);
            }
            */

        };

        sim.get = function()
        {
            return data;
        };

        return sim;

    }

    angular.module('services.simulation', [])
        .factory('SimulationService', SimulationService);

})();
