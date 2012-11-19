define(['Models/DailyMenu'], function(DailyMenu){
	var menuDetailsItemView = Backbone.Marionette.ItemView.extend({
		template: '#item-template',
        events:{
            "click button#like-button": "like",
            "click button#unlike-button": "unlike"
        },

		initialize: function(){
		  this.bindTo(App.vent, 'views:onUpdateDetails', this.updateDetails, this);
		},

        onRender: function(){
            //if there is an address available, we show it and the like / unlike button
            if( typeof(this.model.attributes.place.attributes.address) === "undefined"){
                $('.address-block', this.el).hide();
            }else{
                $('.address-block', this.el).show();
            }
        },

        // increasing the likes 
        like: function(){
            this.model.attributes.place.attributes.like++;
            this.render();
        },

        // increasing the unlikes
        unlike: function(){
            this.model.attributes.place.attributes.unlike++;
            this.render();
        },

        //update the model of the details
        updateDetails: function( model ){
            this.model = model;
            this.render();
        }  
	});

	return menuDetailsItemView;
});