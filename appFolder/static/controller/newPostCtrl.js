

angular.module('angApp').controller('newPostCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter){

    $scope.savePost = function(post){
    	console.log(post)
    	post["res"] = [];
        $http.post('/api/message', post)
        .success(function(res){
            $scope.post = {};
       	})
    }
}])

