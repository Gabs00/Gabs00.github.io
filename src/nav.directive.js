angular.module('personal')
.controller('NavController', function($scope){
  $scope.links = [
    { name:'home', value: 'Home' },
    { name:'blog', value: 'My Blog' },
    { name:'proj', value: 'My Projects' },
    { name:'stuff', value: 'Other things' }
  ];
})
.directive('navMenu', function(){
  return {
    restrict: 'EA',
    templateUrl:'./partials/links.html',
    link:function(scope, element, attr){
      console.log(scope.links);
    }
  };
});
