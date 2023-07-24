from django.contrib import admin
from .models import Mesa

# Register your models here.
@admin.register(Mesa)
class TableAdmin(admin.ModelAdmin):
    
    pass