An example backend for testing frontend frameworks
===================================================

This project serves similar purposes to [TodoMVC](http://addyosmani.github.com/todomvc/), but tries to be
a bit more complex in terms of the generated frontend.

The current app provides the backend, and the features that frontends can support.

Context
--------

The app pretends to provide a daily menu listing of uploaded places. Basically, we have two models:

* Place
* Daily menu

Places can be, but don't have to be pre-registered into the system. As a result not every menu has a related place.

Features
---------

* GET today's menus
* GET menu details
* POST new menu
* GET registered places
* GET place details
* like a place with GET
* unlike a place with GET

Frontend guidelines
--------------------

Views:
_______

1. Have a listing of the daily menus uploaded for the current day
1. Selecting an item should show the menu details and the place details if any
1. When the place details are shown the user should be able to like/unlike the given place
