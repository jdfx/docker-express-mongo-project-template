#!/usr/bin/env bash
GREEN='\033[0;32m'
NC='\033[0m' # No Color
printf "${GREEN}Installing local node_modules for webpack build..${NC}\n"
npm install
printf "${GREEN}Building dist/client and dist/server bundles${NC}\n"
npx webpack
printf "${GREEN}Exporting ENV vars to shell${NC}\n"
export $(egrep -v '^#' .env | xargs) # Export the vars in .env into your shell
printf "${GREEN}Updating nginx.conf with env vars${NC}\n"
sed -i "s/docker-project/${app_name}_${instance_id}/g" ./reverse-proxy/nginx.conf #update nginx.conf with app name
printf "${GREEN}Building project ${app_name}, Instance: ${instance_id} ${NC}\n"
printf "${GREEN}Creating shared volume${NC}\n"
docker volume create "${app_name}_nodemodules_${instance_id}" # Create an external volume for storing shared node_modules
printf "${GREEN}Installing container node_modules to volume (via alpine container)${NC}\n"
docker-compose run node_modules_container # Fires up a node:alpine container, runs npm install (to the volume above, then exits)
printf "${GREEN}Remember to update your windows hosts file!${NC}\n"
printf "${GREEN}Starting services...${NC}\n"
docker-compose up # Fires up the rest of the containers, which can now access the above node-modules

# If I get to a point where the front-end and back-end need seperate node_module depenencies, I will modify this step, currently I don't think that will be an issue.