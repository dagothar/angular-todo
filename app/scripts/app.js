'use strict';

/**
 * @ngdoc overview
 * @name angularTodoApp
 * @description
 * # angularTodoApp
 *
 * Main module of the application.
 */
angular
  .module('angularTodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorage) {
	  localStorage.setPrefix('ang-todo');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
