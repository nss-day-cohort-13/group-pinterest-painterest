angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/userHome', {
        controller: 'UserCtrl',
        controllerAs: 'user',
        templateUrl: '/app/user-home/user.index.html'
      })
      $routeProvider
      .when('/newBoard', {
        controller: 'newBoardCtrl',
        controllerAs: 'board',
        templateUrl: '/app/user-home/board.form.html'
      })
      $routeProvider
      .when('/newPin', {
        controller: 'newPinCtrl',
        controllerAs: 'pin',
        templateUrl: '/app/user-home/pin.form.html'
      })
 })
