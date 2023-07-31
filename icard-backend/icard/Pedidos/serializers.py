from rest_framework.serializers import ModelSerializer
from Productos.serializers import ProductoSerializer
from Mesas.serializers import MesaSerializer
from .models import Pedido

class PedidoSerializer(ModelSerializer):
    
    product_data = ProductoSerializer(source='product', read_only=True)
    table_data = MesaSerializer(source='table', read_only=True)
    
    class Meta: 
        
        model = Pedido
        fields = ['id', 'table', 'table_data', 'status', 'product', 'product_data', 'close', 'created_at']