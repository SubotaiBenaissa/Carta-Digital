from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import MesaSerializer
from .models import Mesa

# Create your views here.

class MesaModelViewSet(ModelViewSet):
    
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all().order_by('number')
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['number'] 