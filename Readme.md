Boiler Plate Repo for dockerizing scala. postgres, and npm with docker and docker-compose

* Based on Repo: https://github.com/BBartosz/akkaRestApi 

* Please read tutorial: http://www.bbartosz.com/blog/2015/12/14/akka-http-rest-api/
to understand the scala-api file structure

* Used https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093 
as reference for dockerizing node for development

* Before using boiler plate you must download and install docker and docker-compose

* Afterwards clone this repo

* First you need to create docker volume for persisting node modules
this is only needed when setting up project for the first time
```
make setup
``` 
* Second install all libs in package.json, when new libs have been added
run the same command again
```
make install
```
* After that you will have installed all packages in node_modules

* Now your ready to build the whole project:
```
make dev
```
* The scala api will up and listening in port 8080; head to 
localhost:8080/hello for hello message the front-end service
will give an error because you need to define the start 
script in package.json once you have chosen what js framework
to use. This will not stop the other containers.

* If you want to start only the scala-api run :
```
make start_scala
```

* When all three services are running you will have a network
of containers running at the specified ports ready to talk
to each other and make requests to each other. Feel free 
to change port numbers and environment variables as you wish

* to completely clean your system of attached volumes and containers
run 
```
make down
```

* Further lines will be added to the Makefile in the future for testing
scala and js 