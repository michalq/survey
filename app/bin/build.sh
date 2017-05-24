#!/bin/sh

basePath=`pwd + "../../"`

# Install dependencies.
npm install ${basePath}app
bower install ${basePath}public

# Building frontend
mkdir ${basePath}dist
./app/node_modules/babel-cli/bin/babel.js ${basePath}public --out-dir ${basePath}dist