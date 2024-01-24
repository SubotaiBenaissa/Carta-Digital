from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from .serializers import PedidoSerializer
from .models import Pedido
# Create your views here.

class PedidoModelViewSet(ModelViewSet):
    
    serializer_class = PedidoSerializer
    queryset = Pedido.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['table', 'status', 'payment', 'close']
    ordering_flieds = '__all__'
