from rest_framework import serializers
from .models import Product, BasketProduct
from core.serializers import UserSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'image')


class BasketProductSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = BasketProduct
        fields = ('id', 'user', 'product', 'number')
        read_only_fields = ['user', ]
