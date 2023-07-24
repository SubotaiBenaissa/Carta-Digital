from django.db import models

# Create your models here.

class Mesa(models.Model):
    
    number = models.IntegerField(unique=True)
    
    def __str__(self):
        
        return str(self.number)