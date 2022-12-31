
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostSerializer


class BlogListView(APIView):
    # Importante que es una tupla poner la coma despues del AllowAnyñ
    permission_classes = (permissions.AllowAny,)
    def get (self, request, format=None):
        if Post.objects.all().exists():
            print('list posts')
            return Response({'post':'test message'}, status=status.HTTP_200_OK)
        else: 
            return Response({'post':'No post found'}, status=status.HTTP_404_NOT_FOUND)
        
# Create your views here.
