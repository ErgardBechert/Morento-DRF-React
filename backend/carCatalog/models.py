from django.db import models
from django.conf import settings
from users.models import NewUser
from datetime import datetime

class Car(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    # start_date = models.DateField()
    # end_date = models.DateField()
    type = models.CharField(max_length=255)
    is_recommend = models.BooleanField(default=False)
    capacity = models.IntegerField()
    gasoline = models.IntegerField()
    steering = models.CharField(max_length=255)
    comments = models.IntegerField()
    grade = models.FloatField()

class CarComment(models.Model):
    user = models.ForeignKey(
        NewUser,
        on_delete=models.CASCADE,
    )
    car_id = models.ForeignKey(
        "Car",
        on_delete=models.CASCADE,
    )
    text = models.TextField(max_length=1000)
    grade = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
