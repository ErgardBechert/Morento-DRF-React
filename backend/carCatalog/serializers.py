from rest_framework import serializers
from .models import Car, CarComment

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CarCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarComment
        fields = '__all__'
