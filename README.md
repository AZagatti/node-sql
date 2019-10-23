# Node SQL

API write in Node.js with Sequelize ORM connected Postgresql in Docker container.

## Dependencies

Use `yarn` or `npm install`.

## Docker

### Check the official documentation for more details.

[Docker Reference](https://docs.docker.com/reference/)

##### I use Linux with Manjaro distribution and up the container with this commands.

##### First install Docker.

`sudo pacman -S docker`

##### Run Docker service.

`sudo systemctl start docker.service`

##### Get Postgresql Image. (I use Kartoza image for Rocketseat recommendation)

[Docker - Kartoza/Postgis](https://hub.docker.com/r/kartoza/postgis/)
`docker pull kartoza/postgis`

##### This command make Docker Service create a container with a postgresql image previously downloaded

`sudo docker run --name "postgis" -p 25432:5432 -d -t kartoza/postgis -e POSTGRES_USER=docker -e POSTGRES_PASS=docker -e POSTGRES_DBNAME=sqlnode`

**--name**

- this parameter set a name for image.

**-p**

- this parameter set two port, first port run in your PC, second run in Docker service.

**-e**

- this parameter is a environment variables, check more in kartoza page on docker hub.

##### Use this command when you want start specific container.

`sudo docker start CONTAINER_NAME`

##### This command show which are containers are running.

`sudo docker ps`
