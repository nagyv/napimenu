define(function(){
	var Place = Backbone.Tastypie.Model.extend({
		urlRoot: '/menus/api/v1/daily/',
        defaults: {
			restaurantName: '',
			like: 0,
			unlike: 0
		},
        initialize: function(){
            console.log(this);
        }
	});

	return Place;
});