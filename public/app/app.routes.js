var app = angular.module('myApp');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "vrController",
      templateUrl: "app/components/vr/vrView.html"
    })
    .when('/form', {
      controller: "formController",
      templateUrl: "app/components/form/formView.html"
    });
});
