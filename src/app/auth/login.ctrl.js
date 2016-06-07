angular.module('app')
  .controller('LoginCtrl', function (AuthFactory, InitializeFirebaseFactory) {
    const auth = this
    const myFirebase = InitializeFirebaseFactory.firebaseReference()

    auth.login = function () {
      AuthFactory.login(myFirebase, auth.user.email, auth.user.password)
    }
  })
