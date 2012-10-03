from django.conf.urls.defaults import *
from django.views.generic import DetailView, CreateView, ListView
import models, forms, resources

from tastypie.api import Api
api = Api(api_name='v1')

api.register(resources.MenuResource())

urlpatterns = patterns('',
    url(r'^$', 
        ListView.as_view(
            queryset=models.DailyMenu.current.all()), 
        name='daily_menu_list'),
    url(r'^(?P<pk>\d+)/$', 
        DetailView.as_view(
            model=models.DailyMenu),
        name='daily_menu_detail'),
    url(r'^new/$', 
        CreateView.as_view(
            form_class=forms.DailyMenuForm,
            model=models.DailyMenu,
        ),
        name='new_daily_menu'),
    url(r'^api/', include(api.urls)),
)