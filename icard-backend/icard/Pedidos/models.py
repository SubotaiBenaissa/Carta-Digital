from django.db import models

Status = (
    ("PENDIENTE", "pendiente"),
    ("ENTREGADO", "entregado")
)

# Create your models here.
class Pedido(models.Model):
    
    table = models.ForeignKey('Mesas.Mesa', on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey('Productos.Producto', on_delete=models.SET_NULL, null=True, blank=True)
    payment = models.ForeignKey('Pagos.Pago', on_delete=models.CASCADE, null=True, blank=True)
    status = models.CharField(max_length=255, choices=Status)
    created_at = models.DateTimeField(auto_now_add=True)
    close = models.BooleanField(default=False)
    
    class Meta:
        
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'
        
    def __str__(self):
        
        return str(self.table)
        