'use strict';

/* Controllers */

function GraineListCtrl($scope, Graine) {
  $scope.phones = Graine.query();
}

function GraineDetailCtrl($scope, $routeParams, Graine) {
  $scope.graine = Graine.get({graineId: $routeParams.graineId});
}
