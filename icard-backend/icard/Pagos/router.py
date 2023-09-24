from rest_framework.routers import DefaultRouter
from .views import PagoModelApiViewSet

router_pagos = DefaultRouter()
router_pagos.register(
    prefix='Pagos', basename='Pagos', viewset=PagoModelApiViewSet
)
