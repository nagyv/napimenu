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
			
			//the collection of daily menus
			var menuList = new MenuList([
        		new DailyMenu({
        			menu: 'Magyaros gombaleves <br> Falusi csirkecomb tepsis burgonya <br> Szilvás joghurtos pite', 
        			place: new Place({
        				restaurantName: 'Szeged Étterem', 
        				address: '6720 Szeged, Széchenyi tér 9.'}) 
        		}),

        		new DailyMenu({
        			menu: 'Bableves <br> Juhtúró,sonkával töltött szelet,steak burgonya', 
        			place: new Place({
        				restaurantName: 'Brnoi Étterem', 
        			}) 
        		}),

        		new DailyMenu({
        			menu: 'Frankfurti leves <br> Hawaii csirkemell vegyes körettel', 
        			place: new Place({
        				restaurantName: 'Etazs Étterem', 
        				address: 'Szeged, Gogol u. 9.'}) 
        		}),
	        ]);

	        // menuList.fetch();

			//setting the regions
	        layout.table.show(new MenuTableCompositeView({
	        	collection: menuList
	        }));
	        layout.details.show(new MenuDetailsView({model: menuList.at(0)}));
		})

		//start our app
		App.start();

});