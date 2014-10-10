testApp.controller('HomeController', ['$scope', '$log', '$location', 'TestServices',
    function($scope, $log, $location, TestServices) {        
        var params = ($location.search());
        if (typeof params['status'] !== "undefined") {
            if(params['status'] == "usercreate") {
                alert("User created successfully");
            } else if(params['status'] == "userupdate") {
                alert("User updated successfully");
            }
        }
        
        $scope.changeView = function(viewName){
            $location.url('/' + viewName);
        }
    }
]);