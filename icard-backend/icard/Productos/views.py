from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProductoSerializer
from .models import Producto
# Create your views here.

class ProductoModelViewSet(ModelViewSet):
    
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()