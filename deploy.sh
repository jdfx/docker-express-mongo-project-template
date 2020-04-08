#!/usr/bin/env bash
npm install
npm run build
npm run test
docker-compose up # docker will run npm run start after it's build the app (node) container