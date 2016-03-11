angular.module('app')
  .controller( 'LoginController', [ '$scope', '$state', function( $scope, $state ) {

    $scope.isLoggedIn = false;

    $scope.logInOrOut = function() {
      $scope.isLoggedIn = !$scope.isLoggedIn;
      $state.go( $scope.isLoggedIn ? 'companies' : 'home' );
    };

  }]);
