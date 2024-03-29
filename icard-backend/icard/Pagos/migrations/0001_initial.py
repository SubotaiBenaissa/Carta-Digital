# Generated by Django 4.0.4 on 2023-09-21 16:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Mesas', '0002_rename_mesas_mesa'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('totalPago', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tipoPago', models.CharField(choices=[('TARJETA', 'tarjeta'), ('EFECTIVO', 'efectivo')], max_length=255)),
                ('estadoPago', models.CharField(choices=[('PENDIENTE', 'pendiente'), ('PAGADO', 'pagado')], max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('mesa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Mesas.mesa')),
            ],
            options={
                'verbose_name': 'Pago',
                'verbose_name_plural': 'Pagos',
            },
        ),
    ]
