'use strict';

/* Services */

angular.module('graineServices', ['ngResource']).
    factory('Graine', function($resource){
  return $resource('rest/graines/:graineId.json', {}, {
    query: {method:'GET', params:{graineId:'graines'}, isArray:true}
  });
});