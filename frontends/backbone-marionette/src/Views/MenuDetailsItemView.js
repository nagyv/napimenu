define(['Models/DailyMenu'], function(DailyMenu){
	var menuDetailsItemView = Backbone.Marionette.ItemView.extend({
		model: DailyMenu,
		template: '#item-template',

		initialize: function(){
			App.vent('details:updateView');
			console.log('hi');
		}
	});

	return menuDetailsItemView;
});