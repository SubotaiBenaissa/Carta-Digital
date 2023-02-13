from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Usuario
# Register your models here.

@admin.register(Usuario)
class UserAdmin(BaseUserAdmin):
    
    pass
