from django.conf import settings
from django.db import models

class Profile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default="")
    platform = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.name
