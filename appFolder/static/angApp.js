
var app = angular.module('angApp', ['ngResource', 'ngRoute','ui.bootstrap']);


app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
        when('/', {
            templateUrl: '/static/partial/main.html',
            controller: ''
        }).otherwise({
            redirectTo: '/'
        });
}]);

