angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/login', {
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        templateUrl: '/app/auth/login.html'
      })
  })
