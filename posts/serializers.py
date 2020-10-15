from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['pk', 'text', 'author', 'pub_date']
