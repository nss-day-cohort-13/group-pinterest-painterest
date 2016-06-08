angular.module('app')
  .controller('LogoutCtrl', function (AuthFactory, $scope, $location) {
    const auth = this;

    $scope.logout = function () {
      AuthFactory.logout()
        .then(() => $location.path('/login'))
    }
  })
