angular.module('app')
  .controller( 'CompaniesController', [ '$scope', 'CompanyFactory', function( $scope, CompanyFactory ) {

    $scope.companies = CompanyFactory.getAll();
    $scope.selectedCompany = $scope.companies[0];

    $scope.select = function( company ) {
      $scope.selectedCompany = company;
    };

  }]);