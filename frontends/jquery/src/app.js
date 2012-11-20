var DailyMenu = function(){

	//the list that stores the menus
	var menuList = [];
	var currentModelId = 0;

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

		

		if(typeof modelToUpdate.place !== 'undefined' && typeof modelToUpdate.place.address !== 'undefined'){

			//we only show the buttons if there is an address
			$('#details-address').text(modelToUpdate.place.address);
			$('#like-num').text(modelToUpdate.place.like);
			$('#unlike-num').text(modelToUpdate.place.unlike);

			$('.address-block').show();
		}else{

			//else we hide the whole div
			$('.address-block').hide();
		}
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
			currentModelId = $(this).data('id');
			updateDisplay(menuList[currentModelId]);
		});

		//updates the models when clicked on like
		$('#like-button').click(function(){
			menuList[currentModelId].place.like++;
			$('#like-num').text(menuList[currentModelId].place.like);

		});

		//updates the models when clicked on unlike
		$('#unlike-button').click(function(){
			menuList[currentModelId].place.unlike++;
			$('#unlike-num').text(menuList[currentModelId].place.unlike);

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
			unlike: 0,
		}});
		addMenu({menu: 'Joker pörkölt', place: {
			restaurantName: 'The Bat',
			address: 'GothamCity',
			like: 0,
			unlike: 0,
		}});

		//we set the details view to the first menu item
		$('.menuRow').eq(0).click();
	}
	

	return{
		startApp: startApp
	}
}();

DailyMenu.startApp();