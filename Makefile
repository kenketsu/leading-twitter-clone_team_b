include backend/.env

COMPOSE := docker-compose.yml

.PHONY: build
build:
	docker-compose -f $(COMPOSE) build

.PHONY: up
up:
	docker-compose -f $(COMPOSE) up

.PHONY: loc
loc:
	@make build
	@make up

.PHONY: exec
exec:
	docker-compose -f $(COMPOSE) exec backend bash

.PHONY: exec-db
exec-db:
	docker-compose -f $(COMPOSE) exec db bash -c "export PGPASSWORD=$(POSTGRES_PASSWORD) && psql -U $(POSTGRES_USER) -d $(POSTGRES_DB)"

.PHONY: down
down:
	docker-compose -f $(COMPOSE) down

.PHONY: clean
clean:
	- docker container ls -aq | xargs docker container rm -f
	docker system prune -af

.PHONY: clean-db
clean-db:
	@make down
	docker volume ls -q | grep $(COMPOSE_PROJECT_NAME)_db_data | xargs docker volume rm ;
