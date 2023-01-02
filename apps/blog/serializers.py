from rest_framework import serializers
from .models import * 
from apps.category.serializors import CategorySerializer
# El serilizador se va a encargar de coger las variables del archivo models y crear un json con esa info para poder leerla en frontend
class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta:
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views', 
            'category'                
]

class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta:
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'views',
            'category'          
]