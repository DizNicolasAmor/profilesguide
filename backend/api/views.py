from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import AllowAny
from .models import Profile
from .serializers import ProfileSerializer
from users.models import CustomUser

class ProfileCreateApiView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=CustomUser(self.request.user)) # error here:
        """
        when I post to create a new profile, I get:
        TypeError: Field 'id' expected a number but got <django.contrib.auth.models.AnonymousUser object at 0x7fed04ec76d0>.


        I cannot pass this because it is waiting for a CustomUser instance:
        
        serializer.save(user=self.request.user)
        """

class ProfileListApiView(ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny]

class ProfileDetail(RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
