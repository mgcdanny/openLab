
angular.module('angApp').controller('headerCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}])