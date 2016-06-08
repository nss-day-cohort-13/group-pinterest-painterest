angular.module('app')
  .controller('UserCtrl', function ($http) {
  	const user = this

  	$http({
  		method: 'GET',
  		url: 'https://project-8469292309614253139.firebaseio.com/.json'
  	}).then((response) => {
  		console.log(response.data)
  		})

  })
