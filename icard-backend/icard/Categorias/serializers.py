from rest_framework.serializers import ModelSerializer
from .models import Categoria

class CategoriaSerializer(ModelSerializer):
    
    class Meta: 
        
        model = Categoria
        fields = ['id', 'title', 'image']