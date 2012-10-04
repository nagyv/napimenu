from django.conf.urls.defaults import *
from django.contrib import admin

#admin.site = AdminSite()
admin.autodiscover()

handler500 = 'djangotoolbox.errorviews.server_error'

urlpatterns = patterns('',
    url('^_ah/warmup$', 'djangoappengine.views.warmup'),
    # (r'^comments/', include('django.contrib.comments.urls')),
    url(r'^', include('menuk.urls')),
    url('^admin/', include(admin.site.urls)),
)
