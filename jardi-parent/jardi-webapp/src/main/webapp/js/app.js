'use strict';

/* App Module */

angular.module('graine', ['graineServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/graines', {templateUrl: 'partials/graine-list.html',   controller: GraineListCtrl}).
      when('/graines/:graineId', {templateUrl: 'partials/graine-detail.html', controller: GraineDetailCtrl}).
      otherwise({redirectTo: '/graines'});
}]);