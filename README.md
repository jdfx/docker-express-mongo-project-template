# DAMEN (Docker, Alpine, Mongo, Express, Node)

Template for initial docker setup using node:alpine, mongo-db, mongo-express and express-js and webpack, comes with babel etc..

Uses node_externals so it doesnt bundle node_modules into main.js - used for server side scripts. If you want to bundle for a web-app just remove the node_externals from webpack.config

## To use
run ./deploy.sh