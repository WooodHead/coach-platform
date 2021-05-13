#!/usr/bin/env bash

docker-compose -f docker-compose.yml -f docker-compose.dev-prod.yml up --build --remove-orphans
