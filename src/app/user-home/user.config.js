angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/home', {
        controller: 'UserCtrl',
        controllerAs: 'user',
        templateUrl: '/app/user-home/user.index.html'
      })
  })
