#!/bin/sh

basePath=`pwd + "/.."`

bower install ${basePath}/public

# Building frontend
mkdir ${basePath}/dist
../node_modules/babel-cli/bin/babel.js ${basePath}/public --out-dir ${basePath}/dist