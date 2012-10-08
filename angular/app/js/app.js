// 'use strict';


// // Declare app level module which depends on filters, and services

angular.module('napimenu', []).config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/place/:id', {templateUrl: 'partials/place_detail.html', controller: PlaceDetailCtrl}).
		when('/menu', {templateUrl: 'partials/daily_menus.html', controller: MenuCtrl}).
		otherwise({redirectTo: '/menu'});
}])

// angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
//   config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
//     $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
//     $routeProvider.otherwise({redirectTo: '/view1'});
//   }]);
