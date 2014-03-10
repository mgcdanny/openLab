angular.module('angApp').controller('editorCtrl', ['$scope', '$http', function($scope, $http){
	
    $scope.htmlVariable = "<h2> Hi </h2>";
    
    $scope.savePost = function(post){
        console.log(post)
    }
	
}])

