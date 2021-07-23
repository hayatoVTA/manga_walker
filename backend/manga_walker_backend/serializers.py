from django.db import models
from rest_framework import serializers
from .models import StoreBook, BookComponent


class StoreBookSerializer(serializers.ModelSerializer):
    
    stored_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = StoreBook
        fields = ('id', 'title', 'category', 'url', 'stored_at')


class BookComponentSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = BookComponent
        fields = ('id', 'title', 'cover_img', 'created_at')
