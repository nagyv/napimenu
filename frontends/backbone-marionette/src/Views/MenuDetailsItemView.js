define(['Models/DailyMenu'], function(DailyMenu){
	var menuDetailsItemView = Backbone.Marionette.ItemView.extend({
		model: DailyMenu,
		template: '#item-template'
	});

	return new menuDetailsItemView;
});