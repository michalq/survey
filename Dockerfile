FROM node:latest

RUN mkdir /src

RUN npm install forever -g
RUN npm install bower -g

WORKDIR /src

RUN cd app && npm install && cd ../public bower install