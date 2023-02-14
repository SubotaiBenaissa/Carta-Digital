from django.urls import path 
from rest_framework.routers import DefaultRouter
from .views import UsuarioModelViewSet

router_user = DefaultRouter()
router_user.register(
    prefix = 'Usuarios',
    basename = 'Usuarios',
    viewset = UsuarioModelViewSet
)
