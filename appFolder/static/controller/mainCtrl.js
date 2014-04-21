
angular.module('angApp').controller('mainCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter){
    
    $scope.threads = {};

    $scope.getThreads = function(){
        $http.get('/api/thread').success(function(res){
            $scope.threads = res
        })
    }

    $scope.getThreads();

    $scope.editThread = function(threadId, data){
       if(data['ath'] === undefined){data['ath'] = ""}
       if(data['dsc'] === undefined){data['dsc'] = ""}
       if(data['tt'] === undefined){data['tt'] = ""}
       if(data["ath"]==="" && data["dsc"]==="" && data["tt"]===""){
            $http.delete('/api/thread/'+threadId)
                .success(function(res){
                    $scope.getThreads();
            })
        }else{
            $http.put('/api/thread/'+threadId, data)
                .success(function(res){
                    $scope.getThreads();
                })
        }
     }

    $scope.editCmt = function(threadId, cmtId, data){
       console.log(data)
        if(data['ath'] === undefined){data['ath'] = ""}
        if(data['dsc'] === undefined){data['dsc'] = ""}
        if(data['ath'] === "" && data['dsc'] === ""){
            $http.delete('/api/comment/'+threadId+'/'+cmtId)
                .success(function(res){
                    $scope.getThreads();
            })
        } else{
            $http.put('/api/comment/'+threadId+'/'+cmtId, data)
                .success(function(res){
                    $scope.getThreads();
            })
        }
    }



    $scope.saveCmt = function(id, data){
        if(!(data === undefined) ){
            $http.post('/api/comment/'+id, data)
                .success(function(res){
                	$scope.getThreads();
           	})
        }
    }
}])
