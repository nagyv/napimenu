define(function(){
	var DailyMenu = Backbone.Model.extend({
		defaults: {
			place: 'N/A',
			menu: 'N/A'
		},

		initialize: function(){
			console.log(this);
		}
	});

	return new DailyMenu;
});