from django.contrib import admin
from .models import Pago

# Register your models here.

@admin.register(Pago)
class PagoAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'mesa', 'totalPago', 'tipoPago', 'estadoPago', 'created_at']