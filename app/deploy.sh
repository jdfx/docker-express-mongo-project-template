#!/usr/bin/env bash
npm install
npm run build
npm run test
docker-compose up