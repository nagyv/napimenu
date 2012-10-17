'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Places', function() {
  var $httpBackend;

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
    })
    browser().navigateTo('../../app/index.html');
  })

  it('should list the places with links', function() {
    element(repeater('.menu li').length).toBe(3);
  });

});
