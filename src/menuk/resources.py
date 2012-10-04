from tastypie.authorization import Authorization
from tastypie.authentication import ApiKeyAuthentication, Authentication
from tastypie.validation import CleanedDataFormValidation as FormValidation
from tastypie.resources import ALL, ALL_WITH_RELATIONS, convert_post_to_put, ModelResource

import models
import forms

class MenuResource(ModelResource):

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
