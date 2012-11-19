require([
	'Models/DailyMenu',
	'Models/Place',
	'Collections/MenuList',
	'Views/AppLayout',
	'Views/MenuDetailsItemView',
	'Views/MenuTableCompositeView'
], function(DailyMenu, Place, MenuList, AppLayout, MenuDetailsView, MenuTableCompositeView){

		//the marionette app that contains and starts our application
		//var App =  || new Backbone.Marionette.Application();

		//the initializer sets up our app and starts everything
		App.addInitializer(function(){
			var layout = new AppLayout();
			$('header').after(layout.render().el);

			//setting the regions
	        layout.table.show(new MenuTableCompositeView({
	        	collection: new MenuList([
	        		new DailyMenu({menu: 'Test', place: new Place({restaurantName: 'Ahoj'}) }),
	        		new DailyMenu({menu: 'other menu', place: new Place()})
	        	])
	        }));
	        layout.details.show(new MenuDetailsView({model: new DailyMenu({
	        	menu: 'Menu Test', 
	        	place: new Place({
	        		restaurantName: "Peti's",
	        		address: 'Szeged'
	        	}) }) }));
		})

		//start our app
		App.start();

});