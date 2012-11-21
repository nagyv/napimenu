define(['Models/DailyMenu'], function(DailyMenu){
	var MenuList = Backbone.Tastypie.Collection.extend({
		urlRoot: '/menus/api/v1/daily/',
        model: DailyMenu
	});

	return MenuList;
});