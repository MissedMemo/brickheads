angular.module('app')
  .controller( 'CompaniesController', [ '$scope', '$timeout', 'CompanyFactory', function( $scope, $timeout, CompanyFactory ) {

    $scope.companies = CompanyFactory.getAll();
    $scope.selection = $scope.companies[0];
        
    $scope.select = function( company ) {
      $scope.selection = company;
    };

    $scope.addCompany = function(name) {
      CompanyFactory.add(name);
      // after promise...
      $scope.companies = CompanyFactory.getAll();
      $scope.selection = $scope.companies[ $scope.companies.length - 1 ];
    };

    $scope.apply = function() {
      var id = $scope.selection.name;
      CompanyFactory.apply(id);
      // after promise... (do we need to retrieve altered co?)
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