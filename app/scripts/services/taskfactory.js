'use strict';

/**
 * @ngdoc service
 * @name angularTodoApp.taskFactory
 * @description
 * # taskFactory
 * Factory in the angularTodoApp.
 */
angular.module('angularTodoApp')
  .factory('taskFactory', ['localStorageService', function (storage) {
    
    var tasks = storage.get('tasks') || []; /*[
		{
			todo: 'Finish the app',
			done: false
		},
		{
			todo: 'Wash clothes',
			done: true
		}
    ];*/

    // Public API here
    return {
      getTasks: function() {
		  return tasks;
	  },
	  
	  setTasks: function(tasks) {
		  storage.set('tasks', tasks);
	  }
    };
  }]);
