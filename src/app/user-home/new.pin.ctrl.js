angular.module('app')
  .controller('newPinCtrl', function (InitializeFirebaseFactory) {
    const pin = this


    pin.submit = function (form) {
    	InitializeFirebaseFactory.submitPin(form);
    }
    	// on submit pin is added to the user's board

})
