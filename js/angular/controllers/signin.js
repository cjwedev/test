myApp.controller('SignInController', ['$scope', '$log', '$location', 'TestServices',
    function($scope, $log, $location, TestServices) {
        $scope.email = "";
        $scope.code = "";
        
        $scope.signin = function(){
            TestServices.VerifyUser($scope.email, $scope.code).then(function(result) { 
                if(result.data == "true") {
                    $location.url('/signup?email=' + $scope.email + '&code=' + $scope.code);
                } else {
                    alert("Incorrect email or code is displayed");
                }
            }, function(error) {
                alert("Incorrect email or code is displayed");
            });
        }            
    }
]);