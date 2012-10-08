import tastypie
from tastypie.authorization import Authorization
from tastypie.authentication import ApiKeyAuthentication, Authentication
from tastypie.validation import CleanedDataFormValidation as FormValidation
from tastypie.resources import ALL, ALL_WITH_RELATIONS, convert_post_to_put, ModelResource

import models
import forms

class PlaceResource(ModelResource):

    menus = tastypie.fields.ToManyField(attribute='dailymenu_set', to='menuk.resources.MenuResource', full=False)

    class Meta:
        queryset = models.Place.objects.all()
        resource_name = 'place'
        detail_allowed_methods = ['get']
        list_allowed_methods = ['get']
        
        object_class = models.DailyMenu
        authentication = Authentication()
        authorization = Authorization()

class MenuResource(ModelResource):

    place = tastypie.fields.ToOneField(attribute='place', to=PlaceResource, full=False)

    class Meta:        
        queryset = models.DailyMenu.current.all()
        resource_name = 'menu'

        #TODO: remove get!
        detail_allowed_methods = ['get']
        list_allowed_methods = ['post', 'get']
        fields = ['menu', 'where', 'from_url', 'day']
        validation = FormValidation(form_class=forms.DailyMenuForm)
        
        object_class = models.DailyMenu
        authentication = Authentication()
        authorization = Authorization()

