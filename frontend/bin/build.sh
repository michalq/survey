#!/bin/sh

cd `pwd`/..

bower install

# Building frontend
mkdir public/dist
./node_modules/babel-cli/bin/babel.js src --out-dir public/dist --minified