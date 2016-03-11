angular.module('app')
  .controller( 'LoginController', [ '$scope', '$state', function( $scope, $state ) {

     // convert to use local storage (angular-local-storage.js)
     // to enable value to survive page refresh...
    $scope.isLoggedIn = false;

    $scope.logInOrOut = function() {
      $scope.isLoggedIn = !$scope.isLoggedIn;
      $state.go( $scope.isLoggedIn ? 'companies' : 'home' );
    };

  }]);
