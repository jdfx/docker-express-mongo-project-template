FROM nginx:stable-alpine

WORKDIR /etc/nginx

COPY nginx.conf .