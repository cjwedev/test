var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/signin', {
        templateUrl: 'signin.html',
        controller: 'SignInController'
    }).
    when('/signup', {
        templateUrl: 'signup.html',
        controller: 'SignUpController'
    }).
    when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);
