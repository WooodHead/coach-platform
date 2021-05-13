#!/usr/bin/env bash


echo "No deploy set!"
exit 1

export URL_HOST=plants.tiim.ch
export DOCKER_HOST="ssh://tim@exo.tiimb.work"
export NEXT_PUBLIC_S3_URL="https://plant-db.s3.fr-par.scw.cloud/plants-db-production/"

docker-compose up --build -d --remove-orphans

echo "Deployed to $DOCKER_HOST ✔"
