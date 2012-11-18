define(['Views/MenuTableItemView'], function(MenuTableItemView){
	var menuTableCompositeView = Backbone.Marionette.CompositeView.extend({
		itemView: MenuTableItemView,
        template: "#table-template",
        itemViewContainer: "tbody",
        tagName: 'table'
	});

	return new menuTableCompositeView
	
});