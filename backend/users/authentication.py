from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import NewUser


class BearerTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if auth_header:
            auth_parts = auth_header.split()
            if len(auth_parts) == 2 and auth_parts[0].lower() == 'bearer':
                token = auth_parts[1]
                try:
                    user = NewUser.objects.get(auth_token=token)
                    return (user, None)
                except NewUser.DoesNotExist:
                    raise AuthenticationFailed('Invalid token.')

        return None