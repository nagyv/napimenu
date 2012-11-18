define(['Models/DailyMenu'], function(DailyMenu){
	var menuTableItemView = Backbone.Marionette.ItemView.extend({
		model: DailyMenu,
        template: "#item-row-template",
        tagName: "tr",
        className: "menuRow",

        showDetails: function(){
        	App.vent('views:updateDetails');
        }
	});

	return new menuTableItemView;
});