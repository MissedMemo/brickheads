angular.module('app')
  .factory( 'CompanyFactory', ['$http', function($http) {

    var demoData = [
        {
          name: 'company X'
        },
        {
          name: 'company Y',
          applied: true
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

    var apply = function(id) {
      // temp hack...
      for ( var i = 0; i < demoData.length; i++ ) {
        if ( demoData[i].name === id ) {
          demoData[i].applied = true;
        }
      } 
    };
    

    return {
      getAll: getAll,
      add: add
    };

  }]);