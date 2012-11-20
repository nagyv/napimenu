define(['Models/DailyMenu'], function(DailyMenu){
        var menuTableItemView = Backbone.Marionette.ItemView.extend({
        	model: DailyMenu,
                template: "#item-row-template",
                tagName: "tr",
                className: "menuRow",
                events: {
                        "click": "showDetails"
                },

                showDetails: function(){
                        $('.success').removeClass('success');
                        this.$el.addClass('success');
                        App.vent.trigger('views:onUpdateDetails', this.model);
                }
        });

        return menuTableItemView;
});