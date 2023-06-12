from rest_framework import serializers
from .models import Car, CarComment, NewUser
from users.serializers import CustomUserSerializer

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CarCommentOneSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarComment
        fields = ('text', 'grade')

class CarCommentSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)

    class Meta:
        model = CarComment
        fields = ('user', 'car_id', 'text', 'grade', 'created_at')
    
    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['user_id'] = user.id  # Assign user ID instead of user object
        car_comment = CarComment.objects.create(**validated_data)
        return car_comment

    def update(self, instance, validated_data):
            instance.text = validated_data.get('text', instance.text)
            instance.grade = validated_data.get('grade', instance.grade)
            instance.save()
            return instance
    