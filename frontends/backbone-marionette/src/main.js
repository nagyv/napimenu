require([
	'Views/AppLayout',
	'Views/MenuDetailsItemView',
	'Views/MenuTableCompositeView'
], function(AppLayout, MenuDetailsView, MenuTableCompositeView){

		//the marionette app that contains and starts our application
		var App = new Backbone.Marionette.Application();

		//the initializer sets up our app and starts everything
		App.addInitializer(function(){
			var layout = new AppLayout();
			$('header').after(layout.render().el);

			//setting the regions
	        layout.table.show( new MenuTableCompositeView());
	        layout.details.show(new MenuDetailsView());
		})

		//start our app
		App.start();

});