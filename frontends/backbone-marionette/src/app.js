$(function(){

    //the application
    var napiMenuApp = new Backbone.Marionette.Application({});

    //represents a single daily menu
    var Menu = Backbone.Model.extend({
        defaults:{
            restaurantName: 'N/A',
            menu: 'N/A',
        }
    });

    //a list of menus
    var MenuList = Backbone.Collection.extend({
        model: Menu,
        initialize: function(){
            this.reset();
        }
    });

    //the layout of the app
    var AppLayout = Backbone.Marionette.Layout.extend({
        tagName: 'div',
        id: 'app-container',
        template: "#layout-template",
        regions: {
            table: "#table-container",
            details: "#detailed-view-container"
        },

        onRender: function(){
        }
    });

    //the view of a single menu item
    var MenuDetailsView = Backbone.Marionette.ItemView.extend({
        model: new Menu(),
        template: "#item-template",
        compiledTemplate: null,
        className: 'hidden',

        //we add an  event binding to the details view so it will update
        //the model if a table row is clicked
        initialize: function(){
            var self = this;

            //compiling the template
            this.compiledTemplate = _.template($(this.template).html());

            //listen for events
            napiMenuApp.vent.bind('click:updateDetails', function(newModel){
                self.model = newModel;
                self.$el.html(self.compiledTemplate( self.model.toJSON() ))
                        .removeClass('hidden');
            });
        },

    });

    //the view for a row of the table
    var MenuRowView = Backbone.Marionette.ItemView.extend({
        model: new Menu(),
        template: "#item-row-template",
        tagName: "tr",
        className: "menuRow",
        events: {
            "click": "showDetails"
        },
        compiledTemplate: null,
        initialize: function(){
            this.compiledTemplate = _.template($(this.template).html());
        },

        onRender: function(){
            this.$el.html(this.compiledTemplate(this.model.toJSON()));
        },

        //we create an event so the details view can update itself
        showDetails: function(){
            napiMenuApp.vent.trigger('click:updateDetails', this.model);
        }

    });

    //the view of the table of menu items
    var MenuItemCompositeView = Backbone.Marionette.CompositeView.extend({
        itemView: MenuRowView,
        template: "#table-template",
        itemViewContainer: "tbody",
        tagName: 'table',

        onRender: function(){
            console.log(this);
            console.log(this.itemView);

            _(this.collection.models).each(function(element, index){
                //var compiledTemplate = _.template($(element.template).html());
                //element.$el.html(element.compiledTemplate({name: element.get('restaurantName'), menu: element.get('menu') }));
            });
        },
    });


    //run the app
    napiMenuApp.addInitializer(function(){

        //creating the layout
        var layout = new AppLayout();
        layout.render();
        $('header').after(layout.el);

        //setting the regions
        layout.table.show(new MenuItemCompositeView({
            collection: new MenuList([new Menu(), new Menu({menu: 'something'}), new Menu({restaurantName: 'Kosztó', menu: 'Menü 1: cukorborsóleves, tejfölös burgonyafőzelék, szárnyasvagdalt Menü 2: húsleves, tejszínes-gombás csirkemellcsíkok, főtt tészta Menü 3: cukorborsóleves, sonkás spagetti saláta, rántott gombával', address: 'Budapest'})])
        }));
        layout.details.show(new MenuDetailsView({model: new Menu()}));
    });

    //start the app
    napiMenuApp.start();

    

});