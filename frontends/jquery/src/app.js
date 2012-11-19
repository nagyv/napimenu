var DailyMenu = function(){

	//the list that stores the menus
	var menuList = [];

	//LAYOUT

	//Add the table and the basic layout
	function createLayout(){
		//Add the layout template to the DOM
		$('header').after($('#layout-template').html());

		//Add the table and the details voew to the layout
		$('#table-container').append($('#table-template').html());
		$('#detailed-view-container').append($('#item-template').html());
	}

	//add the correct row to the app
	function addTableRow(menuToAdd){
		var rowToAdd = $('#item-row-template').html();

		//default value for restaurant name
		var restaurantName = " "
		if(typeof menuToAdd.place !== 'undefined'){
			var restaurantName = menuToAdd.place.restaurantName || " ";
		}

		$('tbody').append(rowToAdd);
		$('tr:last').attr('data-id', menuList.length-1);	
		$('td.place:last').html(restaurantName);
		$('.menu:last').html(menuToAdd.menu);
	}

	//update the details view
	function updateDisplay(modelToUpdate){

		//default values
		var restaurantName = " "
		if(typeof modelToUpdate.place !== 'undefined'){
			var restaurantName =  modelToUpdate.place.restaurantName;
		}
		
		$('#details-name').text(restaurantName);
		$('#details-menu').text(modelToUpdate.menu);

		//we only show this if there is an address

		$('#details-address').text(modelToUpdate.address);
	}

	//add a new menu item
	function addMenu(menuToAdd){
		menuToAdd.menu = menuToAdd.menu || 'N/A';
		menuList.push(menuToAdd);
		addTableRow(menuToAdd);
	}

	//EVENTS
	//handling the events
	function handleEvents(){

		//calls the details view update function with the correct model
		$('tr').live('click', function(event){
			updateDisplay(menuList[$(this).data('id')]);
		});
	}

	//APPLICATION

	function startApp(){
		createLayout();
		handleEvents();
		addMenu({menu: 'Teszt kaja'});
		addMenu({menu: 'Teszt étel', place: {
			restaurantName: 'La Étterem',
			address: 'Starling City',
			like: 0,
			dislike: 0,
		}});

		//we set the details view to the first menu item
		$('.menuRow').eq(0).click();
	}
	

	return{
		startApp: startApp
	}
}();

DailyMenu.startApp();