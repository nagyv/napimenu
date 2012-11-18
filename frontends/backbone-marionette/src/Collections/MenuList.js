define(['Models/DailyMenu'], function(DailyMenu){
	var MenuList = Backbone.Collection.extend({
		model: DailyMenu,
	});

	return new MenuList;
});