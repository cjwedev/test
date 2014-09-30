var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/signin', {
    templateUrl: 'partials/signin.html',
    controller: 'SignInController'
  }).
  when('/signup', {
    templateUrl: 'partials/signup.html',
    controller: 'SignUpController'
  }).
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
