FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=on \
    PIP_DISABLE_PIP_VERSION_CHECK=on

RUN apt update && \
    apt install -y \
    postgresql-client

WORKDIR /code

COPY requirements.txt /code/

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["bash", "docker-entrypoint.sh"]
