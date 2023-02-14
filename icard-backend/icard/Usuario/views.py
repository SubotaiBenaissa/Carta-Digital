
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser
from .models import Usuario
from .serializers import UsuarioSerializer
# Create your views here.

class UsuarioModelViewSet(ModelViewSet):
    
    permission_classes = [IsAdminUser]
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
