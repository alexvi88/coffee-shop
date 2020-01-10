from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .models import Article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
