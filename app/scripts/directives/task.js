'use strict';

/**
 * @ngdoc directive
 * @name angularTodoApp.directive:task
 * @description
 * # task
 */
angular.module('angularTodoApp')
  .directive('task', function () {
    return {
      templateUrl: 'scripts/directives/task.html',
      restrict: 'E'
    };
  });
