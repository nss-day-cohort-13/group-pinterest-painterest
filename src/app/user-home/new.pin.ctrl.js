angular.module('app')
  .controller('newPinCtrl', function (UserFactory, AuthFactory, $location) {
    const pin = this


    pin.submit = function (pinInfo) {
      uid = AuthFactory.getUser();
      pinInfo.uid = uid;
      const type = "pins"
      UserFactory.submitInfo(type, pinInfo)
      	.then(() => $location.path('/userHome'))
    }
    	// on submit pin is added to the user's board

})
