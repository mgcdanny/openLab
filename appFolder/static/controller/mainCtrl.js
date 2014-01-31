

angular.module('angApp').controller('mainCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter){
    $scope.messages = {};

    $scope.getProjects = function(){
        $http.get('/api/message').success(function(res){
            $scope.messages = res
            console.log(res)
        })
    }
     $scope.getProjects();

     $scope.deleteMessage = function(id){
     	$http.delete('/api/message/'+id).success(function(res){
     		$scope.getProjects();
     	})
     }

    $scope.saveCmt = function(id, data){
    	console.log(data)
        $http.post('/api/comment/'+id, data)
        .success(function(res){
        	$scope.getProjects();
       	})
    }

}])

