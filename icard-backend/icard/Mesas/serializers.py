from rest_framework.serializers import ModelSerializer
from .models import Mesa

class MesaSerializer(ModelSerializer):
    
    class Meta: 
        
        model = Mesa
        fields = ['id', 'number']
