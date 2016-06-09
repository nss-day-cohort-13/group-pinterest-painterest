angular.module('app')
  .controller('UserCtrl', function (BoardFactory) {
  	const user = this

  	getId = function() {
  		console.log("hello")
  	}

		BoardFactory.getFirebase().then(data => user.firebaseData = data)
		.then(console.log)


  })

