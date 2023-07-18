from rest_framework.serializers import ModelSerializer
from Categorias.serializers import CategoriaSerializer
from .models import Producto

class ProductoSerializer(ModelSerializer):
    
    category_data = CategoriaSerializer(source='category', read_only=True)
    
    class Meta:
        
        model = Producto
        fields = ['id', 'title', 'image', 'price', 'active', 'category', 'category_data']