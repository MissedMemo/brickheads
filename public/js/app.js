var app = angular.module( 'app', ['ui.router'] );

app.config( function( $stateProvider, $urlRouterProvider ) {
    
  $urlRouterProvider.otherwise('/home');
    
  $stateProvider
        
    .state('home', {
      url: '/home',
      templateUrl: '../views/home.html'
    })

    // nested COMPANIES view
    
    .state('companies', {
      url: '/companies',
      views: {
        '': { 
          templateUrl: '../views/companies.html',
          controller: 'CompaniesController'
        },
        'company-details@companies': {
          templateUrl: '../views/company.html'
        }
      }   
    })

     // nested TASK views...

    .state('companies.resume', {
      templateUrl: '../views/resume.html'
    })

    .state('companies.cover-letter', {
      templateUrl: '../views/cover-letter.html'
    })

    .state('companies.research', {
      templateUrl: '../views/research.html'
    })

    .state('companies.contacts', {
      templateUrl: '../views/contacts.html'
    })

    .state('companies.dates', {
      templateUrl: '../views/dates.html'
    });
});