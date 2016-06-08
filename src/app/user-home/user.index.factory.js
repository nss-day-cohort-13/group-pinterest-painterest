angular.module('app')
	.factory('UserFactory', ($http) =>{
		let firebaseData = {}
		return{
			getFirebase () {
				return $http({
					method: 'GET',
					url: 'https://project-8469292309614253139.firebaseio.com/.json'
		  	})
				.then((response) => {
					return response.data
				})
			}
		}
	})
