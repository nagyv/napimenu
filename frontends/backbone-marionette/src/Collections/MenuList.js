define(['Models/DailyMenu'], function(DailyMenu){
	var MenuList = Backbone.Collection.extend({
		model: DailyMenu,
		intialize: function(){
			this.add(DailyMenu);
		}
	});

	return new MenuList;
});