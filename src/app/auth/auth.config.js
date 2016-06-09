angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        templateUrl: '/app/auth/login.html'
      })
  })
