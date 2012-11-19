define(['Models/DailyMenu'], function(DailyMenu){
        var menuTableItemView = Backbone.Marionette.ItemView.extend({
        	model: DailyMenu,
                template: "#item-row-template",
                tagName: "tr",
                className: "menuRow",

                showDetails: function(){
                	App.vent.trigger('views:updateDetails');
                }
        });

        return new menuTableItemView;
});