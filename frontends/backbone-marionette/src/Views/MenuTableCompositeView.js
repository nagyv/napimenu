define(['Models/DailyMenu', 'Collections/MenuList', 'Views/MenuTableItemView'], function(DailyMenu, MenuList, MenuTableItemView){
	var menuTableCompositeView = Backbone.Marionette.CompositeView.extend({
		collection: MenuList, 
		itemView: MenuTableItemView,
        template: "#table-template",
        itemViewContainer: "tbody",
        tagName: 'table',

        initialize: function(){
        	// console.log(this.collection);
        }
	});

	return new menuTableCompositeView
	
});