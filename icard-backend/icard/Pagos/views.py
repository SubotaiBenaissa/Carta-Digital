from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import PagoSerializer
from .models import Pago

# Create your views here.

class PagoModelApiViewSet(ModelViewSet):
    
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['mesa', 'estadoPago']
    ordering_fields = '__all__'
