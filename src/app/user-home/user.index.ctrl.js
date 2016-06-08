angular.module('app')
  .controller('UserCtrl', function (UserFactory) {
  	const user = this

		UserFactory.getFirebase().then(data => user.firebaseData = data)


  })

