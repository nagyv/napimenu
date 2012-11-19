var DailyMenu = function(){

	//The Menu model
	var DailyMenu = {
		name: 'N/A',
		place: 'N/A'
	};

	//The Place model
	var Place = {
		name: 'N/A',
		address: 'N/A'
	};

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


		$('tbody').append(rowToAdd);		
		$('td.place:last').html(menuToAdd.place);
		$('.menu:last').html(menuToAdd.menu);
	}

	//update the details view
	function updateDisplay(modelToUpdate){
		$('#details-name').text(modelToUpdate.name);
		$('#details-menu').text(modelToUpdate.menu);
		$('#details-address').text(modelToUpdate.address);
	}

	//handling the events
	function handleEvents(){
		$('tr').live('click', function(event){
			console.log(event.target);
		});
	}

	

	return{
		createLayout: createLayout,
		addTableRow: addTableRow,
		handleEvents: handleEvents
	}
}();

DailyMenu.createLayout();
DailyMenu.handleEvents();
DailyMenu.addTableRow({place: 'Test Name', menu: 'Test Menu'});
DailyMenu.addTableRow({place: 'Other Test Name', menu: 'Other Menu'});