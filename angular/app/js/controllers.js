'use strict';

function api_url(path, query) {
	return '/api/v1/' + path + '/'
}

/* Controllers */
function PlaceCtrl($scope, $http) {
	$scope.page = 0;
	$http.get(api_url('place'), {params: {page: $scope.page}}).success(function(data) {
		$scope.meta = data.meta;
    	$scope.places = data.objects;
  	});
}

function PlaceDetailCtrl($scope, $http, $routeParams) {
	$http.get(api_url('place/' + $routeParams.id)).success(function(data) {
		$scope.data = data;
		var urls = []
		_.each(data.menus, function(url){
			urls.push(url.split('/').slice(-2, -1))
		})
		$http.get(api_url('menu/set/' + urls.join(';'))).success(function(data){
			{
				$scope.menus = data.objects
			}
		})
  	});
  	$scope.like = function(){
  		$http.get('/places/' + $routeParams.id + '/like/').success(function(data){
  			$scope.data.likes++;
  		})
  	};
  	$scope.unlike = function(){
  		$http.get('/places/' + $routeParams.id + '/like/').success(function(data){
  			$scope.data.unlikes++;
  		})
  	};
}

function MenuCtrl($scope, $http) {
	$scope.page = 0
	$http.get(api_url('daily')).success(function(data){
		$scope.meta = data.meta
		$scope.menus = data.objects
	})
}