define( function(){
	var AppLayout = Backbone.Marionette.Layout.extend({
		tagName: 'div',
        id: 'app-container',
        className: 'row',
        template: "#layout-template",
        regions: {
            table: "#table-container",
            details: "#detailed-view-container"
        }
	});

	return AppLayout;
})