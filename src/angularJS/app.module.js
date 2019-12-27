import angular from 'angular';
import 'angular-ui-router';
angular
.module('angularJS-app', ['ui.router']);
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});