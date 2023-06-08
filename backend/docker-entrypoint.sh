#!/bin/bash
set -e

if [ -n "$1" ]; then
    exec "$@"
fi

echo "===== Connecting to PostgreSQL ====="
until export PGPASSWORD=$POSTGRES_PASSWORD && psql -U $POSTGRES_USER -h $POSTGRES_HOST; do
    echo "***** Waiting *****"
    sleep 1
done
echo "============ Connected! ============"

python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput

if [ "${DJANGO_SUPERUSER_AUTO_CREATE}" = "True" ]; then
    python manage.py createsuperuser --noinput
fi

python manage.py runserver 0.0.0.0:8000
