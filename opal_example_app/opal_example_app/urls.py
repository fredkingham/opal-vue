from opal.urls import urlpatterns as opatterns
from django.urls import path
from django.views.generic import TemplateView


from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),
    path(
        "", TemplateView.as_view(template_name="vue_base.html"), name="app",
    ),
]

urlpatterns += opatterns
