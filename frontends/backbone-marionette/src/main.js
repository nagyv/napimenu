require([
	'Models/DailyMenu', 
	'Models/Place',
	'Collections/MenuList',
	'Views/AppLayout',
	'Views/MenuDetailsItemView',
	'Views/MenuTableCompositeView'
], function(DailyMenu, Place, MenuList, AppLayout, MenuDetailsView, MenuTableCompositeView){

		//the marionette app that contains and starts our application
		var App = new Backbone.Marionette.Application();

		//the initializer sets up our app and starts everything
		App.addInitializer(function(){
			AppLayout.render();
			$('header').after(AppLayout.el);

			//setting the regions
	        // AppLayout.table.show(MenuTableCompositeView);
	        AppLayout.details.show(MenuDetailsView);
		})

		//start our app
		App.start();
});