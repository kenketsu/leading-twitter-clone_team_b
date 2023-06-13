from rest_framework import generics, permissions
from .serializers import UserCreateSerializer

class UserCreateAPIView(generics.CreateAPIView):
    serializer_class = UserCreateSerializer
    permission_classes = [permissions.AllowAny,]