from django.shortcuts import render
from . import serializers
from .models import StoreBook, BookComponent
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
import django_filters as filters



class StoreBookViewSet(viewsets.ModelViewSet):
    queryset = StoreBook.objects.all()
    serializer_class = serializers.StoreBookSerializer


class StoreBookFilter(filters.FilterSet):
    class Meta:
        model = StoreBook
        fields = '__all__'

class ListBook(APIView):

    def get(self, request):
        filterset = StoreBookFilter(request.query_params, queryset=StoreBook.objects.all())
        serializer = serializers.StoreBookSerializer(instance=filterset.qs, many=True)
        return Response(serializer.data)

class BookComponentViewSet(viewsets.ModelViewSet):
    queryset = BookComponent.objects.all()
    serializer_class = serializers.BookComponentSerializer
