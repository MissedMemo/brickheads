angular.module('app')
  .controller( 'CompaniesController', [ '$scope', 'CompanyFactory', function( $scope, CompanyFactory ) {

    $scope.companies = CompanyFactory.getAll();

  }]);