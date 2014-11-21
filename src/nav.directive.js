angular.module('personal')
.controller('NavController', function($scope){
  $scope.links = [
    { name:'home', value: 'Home', class:''},
    { name:'blog', value: 'My Blog', class:''}/*,
    { name:'proj', value: 'My Projects', class:''},
    { name:'stuff', value: 'Other things', class:''}*/
  ];
})
.directive('navMenu', function(){
  return {
    restrict: 'EA',
    templateUrl:'./partials/links.html',
    link:function(scope, element, attr){
    }
  };
});
