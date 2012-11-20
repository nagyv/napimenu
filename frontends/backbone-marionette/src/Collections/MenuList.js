define(['Models/DailyMenu'], function(DailyMenu){
	var MenuList = Backbone.Collection.extend({
		model: DailyMenu,
        url: '/menus/api/v1/daily/'
	});

	return MenuList;
});