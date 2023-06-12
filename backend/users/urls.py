from django.urls import path
from .views import CustomUserCreate, BlacklistTokenView, TokenUserId, csrf, ping

urlpatterns = [
    path('register/', CustomUserCreate.as_view()),
    path('logout/backlist/', BlacklistTokenView.as_view(), name='blacklist'),
    path('user-id/', TokenUserId.as_view(), name='user_id'),
    path('csrf/', csrf),
    path('ping/', ping),
]
