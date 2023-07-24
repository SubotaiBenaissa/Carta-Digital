from rest_framework.routers import DefaultRouter
from .views import MesaModelViewSet

router_mesa = DefaultRouter()

router_mesa.register(
    prefix='mesas', basename='mesas', viewset=MesaModelViewSet
)