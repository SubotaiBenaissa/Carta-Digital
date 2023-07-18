from rest_framework.routers import DefaultRouter
from .views import ProductoModelViewSet

router_product = DefaultRouter()

router_product.register(
    prefix='products', basename='products', viewset=ProductoModelViewSet
)