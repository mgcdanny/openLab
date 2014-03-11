

angular.module('angApp').controller('newThreadCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter){
	
    $scope.saveThread = function(thread){
        console.log(thread)
    	if(!(thread === undefined)){
            thread["res"] = [];
            $http.post('/api/thread', thread)
                .success(function(res){
           	})
        }
    }
}])

