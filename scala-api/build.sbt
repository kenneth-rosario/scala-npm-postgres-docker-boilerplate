name := "scala-api"

version := "0.1"

scalaVersion := "2.12.7"

libraryDependencies ++= Seq(
  "com.typesafe" % "config" % "1.4.0",
  "com.typesafe.akka" %% "akka-http"   % "10.1.11",
  "com.typesafe.akka" %% "akka-stream" % "2.5.26",
  "com.typesafe.slick" %% "slick" % "3.2.0",
  "org.postgresql"   %  "postgresql" % "9.4-1201-jdbc41",
  "org.flywaydb"       %  "flyway-core" % "3.2.1",
)




