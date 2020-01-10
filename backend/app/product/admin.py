from django.contrib import admin
from .models import Product
from .models import BasketProduct

admin.site.register(Product)
admin.site.register(BasketProduct)