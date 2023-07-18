from rest_framework.serializers import ModelSerializer
from .models import Producto

class ProductoSerializer(ModelSerializer):
    
    class Meta:
        
        model = Producto
        fields = ['id', 'title', 'image', 'price', 'active', 'category']