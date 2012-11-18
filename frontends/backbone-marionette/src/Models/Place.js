define(function(){
	var Place = Backbone.Model.extend({
		defaults: {
			restaurantName: 'N/A',
			address: 'N/A',
			like: 0,
			unlike: 0
		}
	});

	return new Place;
});