angular.module('app')
  .controller('UserCtrl', function (UserFactory) {
  	const user = this

  	getId = function() {
  		console.log("hello")
  	}

		UserFactory.getFirebase().then(data => user.firebaseData = data)
		.then(console.log)


  })

