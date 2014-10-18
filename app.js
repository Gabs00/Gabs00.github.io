angular.module('personal', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/index',
      templateUrl: './home.html',
    })
    .state('blog', {
      url:'/blog',
      template:'<h2>My Blogs</h2>'
    })
    .state('proj', {
      url:'/projects',
      template: '<h2>My Projects</h2>'
    })
    .state('stuff', {
      url:'/other',
      template:'<h2>stuff</h2>'
    });
});
