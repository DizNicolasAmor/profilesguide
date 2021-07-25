from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/profiles/v1/', include('api.urls'), name="profiles"),
    path('api/v1/users/', include('users.urls')),
]
