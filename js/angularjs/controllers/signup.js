testApp.controller('SignUpController', ['$scope', '$log', '$location', 'TestServices',
    function($scope, $log, $location, TestServices) {
        $scope.name = "";
        $scope.email = "";
        $scope.code = "";
        $scope.isSignedUp = true;
        
        var params = ($location.search());
        if (typeof params['email'] !== "undefined" && typeof params['code'] !== "undefined") {
            TestServices.GetUser(params['email']).then(function(result) { 
                console.log(result);
                $scope.isSignedUp = false;
                $scope.name = result.data.name;
                $scope.email = result.data.email;
                $scope.code = result.data.code;
            });
        }
        
        $scope.signUp = function(){
            TestServices.SignUp($scope.name, $scope.email, $scope.code).then(function(result) { 
                if(result.data.status == "success") {
                    $location.url('/home?status=usercreate');
                } else {
                    alert(result.data.message);
                }
            }, function(error) {
                alert(error.data.message);
            });
        }
        
        $scope.updateProfile = function(){
            TestServices.UpdateUser($scope.name, $scope.email, $scope.code).then(function(result) { 
                if(result.data == "true") {
                    $location.url('/home?status=userupdate');
                } else {
                    alert("failed to update");
                }
            }, function(error) {
                alert("failed to update");
            });
        }
        
    }
]);