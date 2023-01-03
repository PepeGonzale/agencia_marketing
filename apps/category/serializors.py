from rest_framework import serializers
from .models import * 
# El serilizador se va a encargar de coger las variables del archivo models y crear un json con esa info para poder leerla en frontend
class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model=Category
        fields=[
            'id',
            'name',
            'slug',
            'views'
        ]