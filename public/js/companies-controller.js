angular.module('app')
  .controller( 'CompaniesController', [ '$scope', 'CompanyFactory', function( $scope, CompanyFactory ) {

    $scope.companies = CompanyFactory.getAll();
    $scope.selection = $scope.companies[0];
    $scope.currentTask = 'research';
    
    $scope.select = function( company ) {
      $scope.selection = company;
    };

    $scope.setTask = function( task ) {
      $scope.currentTask = task;
    };

  }]);