from rest_framework.serializers import ModelSerializer
from .models import Pago
from Mesas.serializers import MesaSerializer

class PagoSerializer(ModelSerializer):
    
    datos_mesa = MesaSerializer(source='mesa', read_only=True)
    
    class Meta: 
        
        model = Pago
        fields = ['id', 'mesa', 'datos_mesa', 'totalPago', 'tipoPago', 'estadoPago', 'created_at']