install:
	docker-compose -f docker-compose.builder.yml run --rm install
dev:
	docker-compose up
setup:
	docker volume create nodemodules
start_scala:
	docker-compose up scala-api
down:
	docker-compose down
