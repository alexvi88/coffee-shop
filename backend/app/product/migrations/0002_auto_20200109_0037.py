# Generated by Django 2.2.6 on 2020-01-08 21:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='basketproduct',
            name='name',
        ),
        migrations.AddField(
            model_name='basketproduct',
            name='product',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='product.Product'),
        ),
    ]