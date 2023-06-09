from django.contrib.auth import get_user_model
from django.contrib.auth.management.commands import createsuperuser


class Command(createsuperuser.Command):
    def handle(self, *args, **options):
        User = get_user_model()
        if User.objects.filter(is_superuser=True, is_staff=True).exists():
            self.stdout.write("Superuser already exists.")
            return
        super().handle(*args, **options)