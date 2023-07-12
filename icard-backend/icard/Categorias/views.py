from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import CategoriaSerializer
from .models import Categoria

# Create your views here.
class CategoriaModelViewSet(ModelViewSet):
    
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = CategoriaSerializer
    queryset = Categoria.objects.all()