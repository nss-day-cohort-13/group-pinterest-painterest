angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/userHome', {
        // controller: 'UserCtrl',
        controllerAs: 'user',
        templateUrl: '/app/user-home/user.index.html'
      })
  })
