
var app = angular.module('angApp', ['ngResource', 'ngRoute','ui.bootstrap','textAngular']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
        when('/', {
            templateUrl: '/static/partial/threads.html',
            controller: 'mainCtrl'
        }).when('/newThread', {
        	templateUrl:'/static/partial/newThread.html',
            controller: 'newThreadCtrl'
        }).when('/demo', {
            templateUrl:'/static/partial/demo.html',
            controller: ''
        }).when('/edit', {
        	templateUrl:'/static/partial/editor.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
}]);
