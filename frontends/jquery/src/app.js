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

	return{
		createLayout: createLayout
	}
}();

DailyMenu.createLayout();