angular.module('personal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home');
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: './partials/home.html'
    })
    .state('blog', {
      url:'/blog',
      templateUrl: './partials/blog.html'
    })
    .state('proj', {
      url:'/projects',
      templateUrl: './partials/projects.html'
    })
    .state('stuff', {
      url:'/other',
      templateUrl: './partials/stuff.html'
    });
});
