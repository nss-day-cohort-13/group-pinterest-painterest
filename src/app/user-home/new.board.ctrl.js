angular.module('app')
  .controller('newBoardCtrl', function (UserFactory, AuthFactory, $location) {
    const board = this


    board.submit = function (boardInfo) {
      uid = AuthFactory.getUser();
      boardInfo.uid = uid;
      const type = "boards"
      UserFactory.submitInfo(type, boardInfo)
      	.then(() => $location.path('/userHome'))
    }
    	// on submit board is added to the user's board

})
