angular.module('app')
  .controller( 'CompaniesController', [ '$scope', function( $scope ) {

    $scope.companies = [
      {
        name: 'company A'
      },
      {
        name: 'company B'
      },
      {
        name: 'company C'
      },
      {
        name: 'company D'
      }
    ];

  }]);