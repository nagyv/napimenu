define(['Models/Place'], function(Place){
	var DailyMenu = Backbone.Tastypie.Model.extend({
        urlRoot: '/menus/api/v1/daily/',
		defaults: {
			menu: 'N/A'
        }
	});

	return DailyMenu;
});