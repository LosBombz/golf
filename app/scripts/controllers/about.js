'use strict';

/**
 * @ngdoc function
 * @name golfApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the golfApp
 */
angular.module('golfApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
