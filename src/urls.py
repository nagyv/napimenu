from django.conf.urls.defaults import *
from django.contrib import admin
from django.views.generic.base import TemplateView

#admin.site = AdminSite()
admin.autodiscover()

handler500 = 'djangotoolbox.errorviews.server_error'

urlpatterns = patterns('',
    url('^_ah/warmup$', 'djangoappengine.views.warmup'),
    # (r'^comments/', include('django.contrib.comments.urls')),
    url(r'^menus/', include('menuk.urls')),
    url(r'^$', TemplateView.as_view(
        template_name='home.html'
        ), name='home'),
    url('^admin/', include(admin.site.urls)),
)
