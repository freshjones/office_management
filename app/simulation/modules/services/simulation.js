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
