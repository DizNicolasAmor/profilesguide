from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=255, default="")
    platform = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.name
