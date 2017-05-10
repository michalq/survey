FROM node:latest

RUN mkdir /src

RUN npm install bower -g

WORKDIR /src
ADD app/ /src/app
ADD public/ /src/public

EXPOSE 3000

RUN cd app && npm install && cd ../public bower install