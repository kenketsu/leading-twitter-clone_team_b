#!/bin/bash
set -e

if [ -n "$1" ]; then
    exec "$@"
fi

python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput

if [ "${DJANGO_SUPERUSER_AUTO_CREATE}" = "True" ]; then
    python manage.py custom_createsuperuser --noinput
fi

python manage.py runserver 0.0.0.0:8000
