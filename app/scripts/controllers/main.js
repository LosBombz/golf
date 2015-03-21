'use strict';

/**
 * @ngdoc function
 * @name golfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the golfApp
 */
angular.module('golfApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
