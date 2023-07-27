from django.contrib import admin
from .models import Pedido

# Register your models here.
@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    
    list_display = ['table', 'product', 'status', 'created_at']