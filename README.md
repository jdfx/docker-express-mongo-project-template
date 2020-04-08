# React / Redux / Jest / Docker - To Do App (just because)

# DAMEN (Docker, Alpine, Mongo, Express, Node)

Template for initial docker setup using node:alpine, mongo-db, mongo-express and express-js and webpack, comes with babel etc..

Uses node_externals so it doesnt bundle node_modules into main.js - used for server side scripts. If you want to bundle for a web-app just remove the node_externals from webpack.config

## To use
- create your .env file from .env.example
- run ./deploy.sh - This runs npm install and npx webpack on the localhost (much faster than running in the container..)
- the docker-compose.yml will mount the local code to /home/node/app and run npm run start inside the container