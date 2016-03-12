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

     // nested RESUME view with custom controller
    .state('companies.resume', {
      url: '/resume',
      templateUrl: '../views/resume.html',
      controller: 'TasksController'
    })

     // nested COVER LETTER view with custom controller
    .state('companies.cover-letter', {
      url: '/cover-letter',
      templateUrl: '../views/cover-letter.html',
      controller: 'TasksController'
    })

     // nested RESEARCH view with custom controller
    .state('companies.research', {
      url: '/research',
      templateUrl: '../views/research.html',
      controller: 'TasksController'
    })

     // nested CONTACTS view with custom controller
    .state('companies.contacts', {
      url: '/contacts',
      templateUrl: '../views/contacts.html',
      controller: 'TasksController'
    })

    //nested DATES view with custom controller
    .state('companies.dates', {
      url: '/dates',
      templateUrl: '../views/dates.html',
      controller: 'TasksController'
    });
});