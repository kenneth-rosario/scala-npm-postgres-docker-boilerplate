

################################################## Native Commands ##########################################################


install_mobile:
	npm --prefix ./front-end-mobile install
dev_native:
	docker-compose up -d scala-api
	npm --prefix ./front-end-mobile run start 
start_mobile_only:
	npm --prefix ./front-end-mobile run start
setup:
	docker volume create nodemodules
stop_scala:
	docker-compose stop db
	docker-compose stop scala-api


################################################## Web Commands #############################################################


setup:
	docker volume create nodemodules
dev_web:
	docker-compose up
install_web:
	docker-compose -f docker-compose.builder.yml run --rm install


################################################## Shared Commands ##########################################################


start_scala:
	docker-compose up scala-api
down:
	docker-compose down

