# Generated by Django 2.2.6 on 2020-01-09 19:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20200109_0037'),
    ]

    operations = [
        migrations.AlterField(
            model_name='basketproduct',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.Product'),
        ),
    ]
