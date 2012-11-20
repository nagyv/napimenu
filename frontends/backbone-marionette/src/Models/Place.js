define(function(){
	var Place = Backbone.Model.extend({
		defaults: {
			restaurantName: '',
			like: 0,
			unlike: 0
		},

        intialize: function(){
            console.log('lofasz');
        }
	});

	return Place;
});