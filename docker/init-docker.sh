docker-compose -f ./docker/sql/docker-compose.yml up --build -d
docker-compose -f ./docker/redis/docker-compose.yml up --build -d
docker-compose -f ./docker-compose.yml up --build -d