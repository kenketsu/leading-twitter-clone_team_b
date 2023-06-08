from uuid import uuid4

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Meta:
        verbose_name = "ユーザー"
        verbose_name_plural = "ユーザー"

    id = models.UUIDField("ID", default=uuid4, primary_key=True, editable=False)
    email = models.EmailField(max_length=254)
