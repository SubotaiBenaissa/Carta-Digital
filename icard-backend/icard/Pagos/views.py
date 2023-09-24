from rest_framework.viewsets import ModelViewSet
from .serializers import PagoSerializer
from .models import Pago

# Create your views here.

class PagoModelApiViewSet(ModelViewSet):
    
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()
