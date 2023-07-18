from django.db import models

# Create your models here.
class Producto(models.Model):
    
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products')
    price = models.DecimalField(max_digits=8, decimal_places=2)
    active = models.BooleanField(default=False)
    category = models.ForeignKey('Categorias.Categoria', on_delete=models.SET_NULL, null=True, blank=True)
    
    class Meta: 
        
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        
    def __str__(self):
        
        return self.title