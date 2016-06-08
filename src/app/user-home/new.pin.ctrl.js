angular.module('app')
  .controller('newPinCtrl', function (UserFactory, AuthFactory) {
    const pin = this


    pin.submit = function (pinInfo) {
      uid = AuthFactory.getUser();
      pinInfo.uid = uid;
      UserFactory.submitPin(pinInfo)
    }
    	// on submit pin is added to the user's board

})
