define(['Models/DailyMenu', 'Collections/MenuList', 'Views/MenuTableItemView'], function(DailyMenu, MenuList, MenuTableItemView){
	var menuTableCompositeView = Backbone.Marionette.CompositeView.extend({
		itemView: MenuTableItemView,
        template: "#table-template",
        itemViewContainer: "tbody",
        tagName: 'div',
        className: 'span8'
	});

	return menuTableCompositeView
	
});