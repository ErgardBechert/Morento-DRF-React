from django.urls import path
from .views import CustomUserCreate, BlacklistTokenView

urlpatterns = [
    path('register/', CustomUserCreate.as_view()),
    path('logout/backlist/', BlacklistTokenView.as_view(), name='blacklist'),
]
