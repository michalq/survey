FROM node:latest

RUN mkdir /src

RUN npm install bower -g

WORKDIR /src
ADD app/ /src/app
ADD frontend/ /src/frontend

EXPOSE 3000

RUN cd app && npm install && cd ../public && bower install && npm install