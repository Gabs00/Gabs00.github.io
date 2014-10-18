angular.module('personal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('i', {
      url: '/index.html',
      templateUrl: 'home.html'
    });
});
