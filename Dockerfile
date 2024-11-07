# Dockerfile.staging

FROM node:18-alpine as build

EXPOSE 8086

WORKDIR /app
COPY package*.json /app/

RUN yarn
COPY . /app

RUN yarn build:sta

FROM nginx:alpine
COPY dynamic-env.json /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/QRMenuV1 /usr/share/nginx/html