from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.ProfileCreateApiView.as_view(), name="create"),
    path('', views.ProfileListApiView.as_view(), name="list"),
    path('<int:pk>', views.ProfileDetail.as_view()),
]
