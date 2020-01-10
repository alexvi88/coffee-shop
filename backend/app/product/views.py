from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .models import Product, BasketProduct
from .serializers import ProductSerializer, BasketProductSerializer


def my_app(request):
    products = Product.objects.values()
    return render(request, 'product/my_app.html',
                  {'products': products})


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class BasketProductViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,
                           mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.Response):
    queryset = BasketProduct.objects.all()
    serializer_class = BasketProductSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SelfBasketProductViewSet(viewsets.ModelViewSet):
    queryset = BasketProduct.objects.all()
    serializer_class = BasketProductSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        queryset = super(SelfBasketProductViewSet, self).get_queryset()
        return queryset.filter(user=self.request.user)