from uuid import uuid4

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, username, email, password, **extra_data):
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **extra_data,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password, **extra_data):
        extra_data.setdefault("is_staff", True)
        extra_data.setdefault("is_superuser", True)
        return self.create_user(username, email, password, **extra_data)


class User(AbstractUser):
    class Meta:
        verbose_name = "ユーザー"
        verbose_name_plural = "ユーザー"

    id = models.UUIDField("ID", default=uuid4, primary_key=True, editable=False)
    email = models.EmailField(max_length=254, unique=True)

    objects = UserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
