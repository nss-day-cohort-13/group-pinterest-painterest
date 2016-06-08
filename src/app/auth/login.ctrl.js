angular.module('app')
  .controller('LoginCtrl', function (AuthFactory, InitializeFirebaseFactory, $location) {
    const auth = this;
    const myFirebase = InitializeFirebaseFactory.firebaseReference();


    auth.login = function () {
      AuthFactory.login(myFirebase, auth.user.email, auth.user.password)
        // .then((loginInfo) => auth.currentUser = loginInfo.uid)
        .then(() => $location.path('/userHome'))
    }
  })
