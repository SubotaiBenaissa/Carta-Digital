from rest_framework.viewsets import ModelViewSet
from .serializers import PedidoSerializer
from .models import Pedido
# Create your views here.

class PedidoModelViewSet(ModelViewSet):
    
    serializer_class = PedidoSerializer
    queryset = Pedido.objects.all()
