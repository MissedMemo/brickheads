angular.module('app')
  .controller( 'LoginController', [ '$scope', function( $scope ) {

    $scope.isLoggedIn = false;

    $scope.login = function() {
      $scope.isLoggedIn = true;
    };

    $scope.logout = function() {
      $scope.isLoggedIn = false;
    };

  }]);

  //ng-show="showMe"