#!/bin/bash

echo "Jump to Tetramed app directory"
cd /home/ec2-user/tetramed

echo "Pull changes from GitHub"
git pull

echo "Install app dependencies"
npm install

echo "Run app with pm2 and if it's not running, start it"
pm2 restart tetramed || pm2 start server.js --name "tetramed"