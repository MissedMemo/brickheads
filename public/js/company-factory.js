angular.module('app')
  .factory( 'CompanyFactory', ['$http', function($http) {

    var demoData = [
        {
          name: 'company X'
        },
        {
          name: 'company Y'
        },
        {
          name: 'company Z'
        }
    ];

    var getAll = function() {
      return demoData;
    };

    var add = function(name) {
      demoData.push( { name: name } );   
    };
    

    return {
      getAll: getAll,
      add: add
    };

  }]);