docker stop $(docker ps -q)
docker rm $(docker ps -q -a)
docker rmi $(docker images -q)
docker container rm $(docker container ls -q)

docker system prune -a --volumes