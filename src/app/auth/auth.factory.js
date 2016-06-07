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
    }
  })

  .factory('AuthFactory', () => {

    return {
      login (myFirebase, email, password) {
        myFirebase.auth().signInWithEmailAndPassword(email, password).then(console.log);
      }
    }
  })
