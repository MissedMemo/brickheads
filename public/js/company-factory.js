angular.module('app')
  .factory( 'CompanyFactory', ['$http', function($http) {

    var getAll = function() {
      return [
        {
          name: 'company A'
        },
        {
          name: 'company B'
        },
        {
          name: 'company C'
        }
      ];   
    };
    

    return {
      getAll: getAll
    };

  }]);