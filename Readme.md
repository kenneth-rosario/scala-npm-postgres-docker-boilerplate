# Boilerplate repo for INSO-4XXX Class Using typescript&React for Front End, Scala for backend, and Postgres for DB

## References 

* Scala api based on: https://github.com/BBartosz/akkaRestApi 

* Please read tutorial to understand scala-api file structure: http://www.bbartosz.com/blog/2015/12/14/akka-http-rest-api/

* Used https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093 as reference for dockerizing node for development

* Typescript tutorial: https://www.typescriptlang.org/docs/home.html

* Scala Akka tutorial: https://developer.lightbend.com/guides/akka-http-quickstart-scala/

* Scala Basics: https://www.youtube.com/watch?v=LQVDJtfpQU0&t=101s

* React Native Tutorial: https://reactnative.dev/docs/tutorial

* React tutorial : https://www.youtube.com/watch?v=SBB2ImDSkEM&list=PLGQZLhPrQ7f0ZIobdeNdR0IXneXVDLUoE

* What is Docker ? : https://www.youtube.com/watch?v=_dfLOzuIg2o

* Install Node: https://nodejs.org/en/download/

* Install Docker: https://docs.docker.com/compose/install/

* Install docker-compose: https://docs.docker.com/compose/install/

## Pre-requisites

### For Web Application:

* Donwload and install docker and docker-compose
* If using windows, install make: http://gnuwin32.sourceforge.net/packages/make.htm

### For Native Applications:

* Download and install doker and docker-compose
* Download and install nodejs and make sure npm is in your binaries
* If using windows, install make: http://gnuwin32.sourceforge.net/packages/make.htm

# For Web Application

## This Section is for teams who have decided to make a website as their fron end
## Always run make commands from the root directory of the boilerpalte

* All Source Code should be written in front-end-web

* First clone this repo to your desired location

* Run the setup command:
```
    make setup
```
* Then install al dependancies. If you add any new dependancy to the package.json in front-end-web run this command again:
```
    make install_web
```
* To build app and run all parts of the system run:(This will startup docker and create your db, your scala restful api, and your front-end server 
* Scala: localhost:8080, WebApp: localhost:3000, Db: localhost:5432
```
    make dev_web
```
* Remove all images and docker containers from system:
```
    make down
```
* To start only the scala-api and not the front-end server:
```
    make start_scala
```
# For Native Applications:

## This Section is for teams who have decided to make a Native App as their front end
## Always run make commands from the root directory of the boilerpalte

* Install all dependancies fist:
```
    make install_mobile
```
* To start both mobile dev server and scala-api:
```
    make dev_native
```
* To start only mobile dev seerver:
```
    make start_mobile_only
```
* To Stop scala-api:
```
    make stop_scala
```
* To start only the scala-api and not the front-end server:
```
    make start_scala
```

# Other Information

* If you need to change port numbers, environment variables or anything else you can do that in the docker-compose.yml file
* There you will find all services that are ran in docker containers, what ports are exposed and the environment variables defined
* Please note that this docker-compose.yml file is built for development only
* You have to create another docker-compose with the appropiate settings for deployment

# Recommended IDEs or text editor:

* You can use visual studio code with the Docker, scala and git extensions
* You can use any text editor and a terminal
* You can use IntelliJ for scala app

# You can use both if you plan on doing both a native app and a website