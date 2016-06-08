angular.module('app')
  .controller('newPinCtrl', function (UserFactory) {
    const pin = this


    pin.submit = function (form) {
    	UserFactory.submitPin(form);
    }
    	// on submit pin is added to the user's board

})
