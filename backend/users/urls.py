from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, TokenUserId, UserDataView, avatar_view, csrf, ping

urlpatterns = [
    path('register/', CustomUserCreate.as_view()),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
    path('user-id/', TokenUserId.as_view(), name='user_id'),
    path('user-data/', UserDataView.as_view(), name='user_data'),
    path('avatars/<str:filename>', avatar_view, name='avatar'),
    path('csrf/', csrf),
    path('ping/', ping),
]
