FROM node:latest

RUN mkdir /src

RUN npm install bower -g

WORKDIR /src
ADD app/ /src/app
ADD frontend/ /src/frontend

EXPOSE 3000