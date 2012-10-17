$(function(){

    //The menu model
    var Menu = function(name, menu, address){
        var self = this;

        self.name = ko.observable(name);
        self.menu = ko.observable(menu);
        self.address = ko.observable(address);
        self.like = ko.observable(0);
        self.unlike = ko.observable(0);

        self.likeText = ko.computed(function(){
            return "Like "+self.like().toString();
        });

        self.unlikeText = ko.computed(function(){
            return "Unlike "+self.unlike().toString();
        }, self);

        self.addLike = function(){
            self.like(self.like()+1);
        };

        self.addUnlike = function(){
            self.unlike(self.unlike()+1)
        }
    };


    //The table view viewmodel
    var TableViewModel = function(){
        //aliasing this
        var self = this;

        //data
        self.detailedMenu = ko.observable( new Menu());
        self.menuList = ko.observableArray([new Menu('Castro', 'Babgulyás'),
            new Menu('McDonalds', 'Sajtburger', 'Budapest VII. kerület'),
            new Menu('Buffalo', 'Steak')]);

        //behaviour
        self.changeDetailedMenu = function(data){
            self.detailedMenu(data);
            console.log(ko.toJSON(data));
        }

    };

    var tableViewModel = new TableViewModel();
    ko.applyBindings( tableViewModel );

});