from rest_framework.routers import DefaultRouter
from .views import CategoriaModelViewSet

router_categoria = DefaultRouter
router_categoria.register(
    prefix='categorias', basename='categorias', viewset=CategoriaModelViewSet
)