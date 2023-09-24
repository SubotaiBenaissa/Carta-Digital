from rest_framework.viewsets import ModelViewSet
from .models import Pago

# Create your views here.

class PagoModelApiViewSet(ModelViewSet):
    
    # serializer_class
    queryset = Pago.objects.all()
