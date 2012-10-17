'use strict';

/* jasmine specs for controllers go here */

describe('api_url', function(){
  it('should return a simple url', function(){
    expect(api_url('mypath')).toEqual('/api/v1/mypath/')
  });
})

describe('PlaceCtrl', function() {
  var placeCtrl, $httpBackend, scope;

  beforeEach(function() {
    inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/v1/place/?page=0').
          respond(
            {"meta": {"limit": 20, "next": null, "offset": 0, "previous": null, "total_count": 1}, "objects": [
              {"address": "MyStreet", "base_url": "http://example.com/place1", "id": 38, "likes": 2, "map_url": "http://goo.gl/maps/UyKgR", "name": "Place1", "resource_uri": "/api/v1/place/38/", "unlikes": 1},
              {"address": "Myplace", "base_url": "http://example.com/place2", "id": 38, "likes": 0, "map_url": "http://goo.gl/maps/UyKgR", "name": "Place2", "resource_uri": "/api/v1/place/37/", "unlikes": 1}
              ]}
          );
 
      scope = $rootScope.$new();
      placeCtrl = $controller(PlaceCtrl, {$scope: scope});
    })
  })

  it('should set page=0 by default', function(){
    expect(scope.page).toEqual(0)
  })

  it('should create place models', function(){
    expect(scope.places).toBeUndefined()
    expect(scope.meta).toBeUndefined()
    $httpBackend.flush();
 
    expect(scope.meta).toEqual({"limit": 20, "next": null, "offset": 0, "previous": null, "total_count": 1});
    expect(scope.places).toEqual([
              {"address": "MyStreet", "base_url": "http://example.com/place1", "id": 38, "likes": 2, "map_url": "http://goo.gl/maps/UyKgR", "name": "Place1", "resource_uri": "/api/v1/place/38/", "unlikes": 1},
              {"address": "Myplace", "base_url": "http://example.com/place2", "id": 38, "likes": 0, "map_url": "http://goo.gl/maps/UyKgR", "name": "Place2", "resource_uri": "/api/v1/place/37/", "unlikes": 1}
            ]);
  })
})

describe('PlaceDetailCtrl', function(){
  var placeCtrl, $httpBackend, scope;

  beforeEach(function() {
    inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/v1/place/38/').
          respond(
            {"address": "Madách tér", "base_url": "https://www.facebook.com/pages/Castro-Bistro/122722877774278", "id": 38, "likes": 2, "map_url": "http://goo.gl/maps/UyKgR", "name": "Castro Bistró", "resource_uri": "/api/v1/place/38/", "unlikes": 1}
          );
 
      $routeParams.id = '38';
      scope = $rootScope.$new();
      placeCtrl = $controller(PlaceDetailCtrl, {$scope: scope});
    })
  })

  it("should load the place details", function(){
    expect(scope.id).toBeUndefined();
    $httpBackend.flush();

    expect(scope.data).toEqual({"address": "Madách tér", "base_url": "https://www.facebook.com/pages/Castro-Bistro/122722877774278", "id": 38, "likes": 2, "map_url": "http://goo.gl/maps/UyKgR", "name": "Castro Bistró", "resource_uri": "/api/v1/place/38/", "unlikes": 1})
  })
})