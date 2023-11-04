#!/bin/bash

npm install
npm run build
docker-compose build --no-cache
docker-compose up --force-recreate