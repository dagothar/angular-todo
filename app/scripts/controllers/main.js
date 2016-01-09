'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('MainCtrl', ['$scope', 'taskFactory', function ($scope, taskFactory) {
    
    $scope.tasks = taskFactory.getTasks() || [];
    
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
	
	$scope.$watch('tasks', function() {
		taskFactory.setTasks($scope.tasks);
	}, true);
    
  }]);
