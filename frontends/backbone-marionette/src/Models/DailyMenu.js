define(function(){
	var DailyMenu = Backbone.Model.extend({
		defaults: {
			place: 'N/A',
			menu: 'N/A'
		}
	});

	return DailyMenu;
});