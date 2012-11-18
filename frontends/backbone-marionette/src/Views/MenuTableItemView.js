define(['Models/DailyMenu'], function(DailyMenu){
	var menuTableItemView = Backbone.Marionette.ItemView.extend({
		model: DailyMenu,
		template: '#item-row-template'
	});

	return new menuTableItemView;
});