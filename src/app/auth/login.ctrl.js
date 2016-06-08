angular.module('app')
  .controller('LoginCtrl', function (AuthFactory, InitializeFirebaseFactory, $location) {
    const auth = this;

    auth.login = function () {
      AuthFactory.login(auth.user.email, auth.user.password)
        // .then((loginInfo) => auth.currentUser = loginInfo.uid)
        .then(() => $location.path('/userHome'))
    }
  })
