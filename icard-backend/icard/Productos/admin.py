from django.contrib import admin
from .models import Producto

# Register your models here.

@admin.register(Producto)
class ProductAdmin(admin.ModelAdmin):
    
    pass