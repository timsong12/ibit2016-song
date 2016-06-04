var elfApp = angular.module('elfApp');

elfApp.controller('FirstController', function($scope, $http) {
    'use strict';

    $scope.description = 'First Controller Data';

    $scope.loadData = function() {
        $http.get('Presidents.json')
            .then(function(presidentss) {
                $scope.presidentsData = JSON.stringify(presidentss.data, null, 4);
                $scope.presidentsStatus = JSON.stringify(presidentss.status, null, 4); //status: 200
                $scope.presidentsConfig = JSON.stringify(presidentss.config, null, 4); // what is config?
                $scope.presidentsStatusText = JSON.stringify(presidentss.statusText, null, 4); //status text
            });
    };

    $scope.loadData();
});

elfApp.directive('elfFirstDescription', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-controller'
    };
});

elfApp.directive('elfFirstData', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-data'
    };
});