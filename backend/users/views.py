from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
import jwt

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class BlacklistTokenView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated


class TokenUserId(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_id = request.user.id
        if request.user.is_authenticated:
            return Response({'message': 'Авторизован', 'user_id': user_id})
        else:
            return Response({'message': 'Не авторизован'})

from django.http import JsonResponse
from django.middleware.csrf import get_token


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def ping(request):
    return JsonResponse({'result': 'OK'})

# @api_view()
# def get_user_id(request):
#     # Get the JWT token from the Authorization header
#     auth_header = request.META.get('HTTP_AUTHORIZATION')
#     if auth_header and auth_header.startswith('Bearer '):
#         # Extract the token from the Authorization header
#         jwt_token = auth_header.split(' ')[1]
#     else:
#         return Response({'error': 'Invalid token'}, status=401)

#     try:
#         # Decode the JWT token to retrieve the payload
#         decoded_payload = jwt.decode(jwt_token, algorithms=["HS256"])

#         # Extract the user ID from the payload
#         user_id = decoded_payload['user_id']

#         # Set the renderer class for this view
#         get_user_id.renderer_classes = [JSONRenderer]

#         return Response({'user_id': user_id})
#     except jwt.InvalidTokenError:
#         return Response({'error': 'Invalid token'}, status=401)