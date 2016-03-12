angular.module('app')
  .controller( 'CompaniesController', [ '$scope', '$timeout', 'CompanyFactory', function( $scope, $timeout, CompanyFactory ) {

    $scope.companies = CompanyFactory.getAll();
    $scope.selection = $scope.companies[0];
        
    $scope.select = function( company ) {
      $scope.selection = company;
    };

    // HACK: forcing #defaultTask click event
    // inits nested view AND $scope.currentTask
    
    var privateInit = function () {
      $timeout( function() {
        var node = document.querySelector('#defaultTask');
        angular.element(node).triggerHandler('click');
      }, 100);
    };

    privateInit();
    

  }]);