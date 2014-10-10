testApp.factory('TestServices', function($http, $log) {
    var factory = {}; 
    var url = "http://api-test.ivanfarms.com/";
    factory.SignUp = function(name, email, code) {
        return $http({
                url: url + 'createUser',
                method: "post",
                data: {
                    name: name,
                    email: email,
                    code: code
                }
            })
            .success(function(data, status, headers){
                return data;
            })
            .error(function(data, status, headers) {
                $log.error(data);
                console.dir(data);
                return data;
            });
    }
    
    factory.VerifyUser = function(email, code) {
        return $http({
                url: url + 'verifyUser',
                method: "post",
                data: {
                    email: email,
                    code: code
                }
            })
            .success(function(data, status, headers){
                return data;
            })
            .error(function(data, status, headers) {
                $log.error(data);
                console.dir(data);
                return data;
            });
    }
    
    factory.GetUser = function(email) {
        return $http({
                url: url + 'user/' + email,
                method: "get"
            })
            .success(function(data, status, headers){
                return data;
            })
            .error(function(data, status, headers) {
                $log.error(data);
                console.dir(data);
                return data;
            });
    }

    factory.UpdateUser = function(name, email, code) {
        return $http({
                url: url + 'user/' + email,
                method: "put",
                data: {
                    name: name,
                    email: email,
                    code: code
                }
            })
            .success(function(data, status, headers){
                return data;
            })
            .error(function(data, status, headers) {
                $log.error(data);
                console.dir(data);
                return data;
            });
    }
    
    return factory;
});