var elfApp = angular.module('elfApp');

elfApp.controller('AboutController', function($scope) {
    'use strict';

    $scope.description = 'About Controller Data';

});

elfApp.directive('elfAboutDescription', function() {
    'use strict';
    return {
        controller: 'AboutController',
        templateUrl: 'about-controller'
    };
});