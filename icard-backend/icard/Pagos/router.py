from rest_framework.routers import DefaultRouter
from .views import PagoModelApiViewSet

router_pagos = DefaultRouter()
router_pagos.register(
    prefix='pagos', basename='pagos', viewset=PagoModelApiViewSet
)
