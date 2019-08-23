
var myUserApp = angular.module('myUserApp', []);

myUserApp.controller('UserController', ['$scope', function($scope){

$scope.add = function(a,b) {
 return (a + b);
};
$scope.multiply = function(a,b) {
    return (a * b);
   };
$scope.divide = function(a,b) {
    return (a / b);
   };
$scope.exponentiate = function(a,b) {
    return a ** b;
   };
$scope.subtract = function(a,b) {
if(a > b) {
return a - b;
}
if( a < b) {
return b - a;
}
if( a = b) {
    return "0";
    }
};


}]);
