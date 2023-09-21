from django.db import models

TipoPago = (
    ("TARJETA", "tarjeta"),
    ("EFECTIVO", "efectivo")
)

EstadoPago = (
    ("PENDIENTE", "pendiente"),
    ("PAGADO", "pagado")
)

# Create your models here.
class Pago(models.Model):
    
    mesa = models.ForeignKey('Mesas.Mesa', on_delete=models.SET_NULL, null=True)
    totalPago = models.DecimalField(max_digits=10, decimal_places=2)
    tipoPago = models.CharField(max_length=255, choices=TipoPago)
    estadoPago = models.CharField(max_length=255, choices=EstadoPago)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta: 
        
        verbose_name = 'Pago'
        verbose_name_plural = 'Pagos'
    
    def __str__(self):
        
        return str(self.mesa)