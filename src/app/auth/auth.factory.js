angular.module('app')
	.factory('InitializeFirebaseFactory', () => {
    		var config = {
    		  apiKey: "AIzaSyDLcch0WigGQ48hB64OJE0FqRkYrlH1dvk",
    		  authDomain: "project-8469292309614253139.firebaseapp.com",
    		  databaseURL: "https://project-8469292309614253139.firebaseio.com",
    		  storageBucket: "project-8469292309614253139.appspot.com",
    		};
        firebase.initializeApp(config);
    return {
      firebaseReference () {
        return firebase;
      }
    };
  })

  .factory('AuthFactory', ($timeout) => {
    let currentUser = null;

    return {
      login (email, password) {
        return $timeout().then(() => (
          firebase.auth().signInWithEmailAndPassword(email, password)
        )).then((loginResponse) => currentUser = loginResponse.uid);
      },

      logout () {
       return $timeout().then(() => (
          firebase.auth().signOut().then(function() {
            // Sign-out successful.
            currentUser = null;
          }, function(error) {
            // An error happened.
            alert('Error Loggin Out');
          })
        ))
      },

      getUser () {
        return currentUser;
      }
    };
  })


  .factory('UserFactory', ($http) => {


    return {
      submitInfo (type, pinInfo) {
        return $http.post(`https://project-8469292309614253139.firebaseio.com/${type}/.json`, pinInfo)
      }
    }
  })

