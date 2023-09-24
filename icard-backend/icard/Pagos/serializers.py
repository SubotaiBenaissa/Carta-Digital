from rest_framework.serializers import ModelSerializer
from .models import Pago

class PagoSerializer(ModelSerializer):
    
    class Meta: 
        
        model = Pago
        fields = ['id', 'mesa', 'totalPago', 'tipoPago', 'estadoPago', 'createdAt']