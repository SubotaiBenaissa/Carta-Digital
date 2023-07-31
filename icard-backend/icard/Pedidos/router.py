from rest_framework.routers import DefaultRouter
from .views import PedidoModelViewSet

router_pedidos = DefaultRouter()

router_pedidos.register(
    prefix="pedidos", basename="pedidos", viewset=PedidoModelViewSet
)