'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    
    $scope.tasks = [
		{
			todo: 'Finish the app',
			done: false
		},
		{
			todo: 'Wash clothes',
			done: true
		}
    ];
    
    $scope.toggleTask = function(index) {
		$scope.tasks[index].done = !$scope.tasks[index].done;
	};
	
	$scope.removeTask = function(index) {
		$scope.tasks.splice(index, 1);
	};
	
	$scope.addTask = function() {
		var newTask = {
			todo: $('#newTask').val(),
			done: false
		};
		
		$scope.tasks.push(newTask);
	};
    
  }]);
