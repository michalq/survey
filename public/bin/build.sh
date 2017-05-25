#!/bin/sh

basePath=`pwd + "/.."`

bower install ${basePath}

# Building frontend
mkdir ${basePath}/dist
../node_modules/babel-cli/bin/babel.js ${basePath}public --out-dir ${basePath}/dist