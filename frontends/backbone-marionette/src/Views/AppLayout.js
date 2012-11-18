define( function(){
	var AppLayout = Backbone.Marionette.Layout.extend({
		tagName: 'div',
        id: 'app-container',
        template: "#layout-template",
        regions: {
            table: "#table-container",
            details: "#detailed-view-container"
        }
	});

	return new AppLayout;
})