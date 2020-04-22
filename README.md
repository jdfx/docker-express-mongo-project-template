# DAMEN (Docker, Alpine, Mongo, Express, Node)

Template for initial docker project setup using node:alpine, mongo-db, mongo-express, express-js and webpack. Features transpilation via babel, seperate client / server bundles, hot module re-loading and a reverse-proxy via nginx. Jest included for testing.

Designed not to conflict (even with it's self) fire up 10 versions of the same code just change the instance_id and/or app_name.

Provide a minimal-fuss go-to application stack that can be re-used and up-dated over time. Doesn't have a preference to front-end tech, use React, Vue, Angular whatever you like.

## To use
- create your .env file (from .env.example)
- run ./deploy.sh
- update your windows hosts file to point whatever-is-in-your-nginx.conf to 127.0.0.1
- enjoy


## To know
- If you change your nginx.conf after the fact, just run 'docker-compose build reverse_proxy' and then ./deploy.sh again
- The nginx.conf purposefully overwrites the main /etc/nginx/nginx.conf file in the container, this way the entire nginx configuration is in our code base, not just a /conf.d site-enabled. This setup is designed to run one domain, serving a back-end and front-end.
- node_modules are installed twice (for good reason) once locally on windows for building the bundles, then we fire up a temporary alpine container that builds them in linux and dumps them on a shared volume for the server and client to use in production.
- If you add more node_modules, just ./deploy again
- Internal frontend/backend docker networks are protected via an nginx reverse-proxy - static files served via nginx, backend is on a sub-domain api.yourapp.local

## To do
- Create production version of ./deploy.sh (remove mongo-express admin interface etc..)
- SSL
- hotmodule re-loading
- webpack watch commands for re-building code in /dist automatically
- restrict back-end calls to ajax only?
- sort out mongo-express credentials etc